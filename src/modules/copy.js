import path from 'path';
import { createReadStream, createWriteStream } from 'fs'

export const copy = async (args) => {
	try {
		const fileName = path.basename(args[0]);
		const dirPathTo = path.join(args[1], fileName);
		const readStream = createReadStream(args[0]);
		const writeStream = createWriteStream(dirPathTo);
		readStream.pipe(writeStream);
	} catch (err) {
		throw new Error('Operation failed')
	}
};
