import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises'

export const move = async (args) => {
	try {
		const fileName = path.basename(args[0]);
		const dirPathTo = path.join(args[1], fileName);
		const readStream = createReadStream(args[0]);
		const writeStream = createWriteStream(dirPathTo);
		readStream.pipe(writeStream)
        readStream.on("end", async () => {
            rm(args[0]);})
	} catch (err) {
		throw new Error('Operation failed')
	}
};
