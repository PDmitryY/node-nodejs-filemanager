import path from 'path';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async (args) => {
    const fileToCompress = args[0];
    const fileName = path.basename(args[0]);
    const compressedFile = path.join(args[1], `${fileName}.br`);
    const readStream = createReadStream(fileToCompress);
    const writeStream = createWriteStream(compressedFile);
    const compress = createBrotliCompress();
    pipeline(readStream, compress, writeStream, (err)=> console.log(err))
};
