import path from 'path';
import { pipeline } from 'stream';
import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async (args) => {
    const compressedFile = args[0];
    const fileName = path.basename(args[0]).replaceAll('.br', '');
    const unCompressedFile = path.join(args[1], fileName);
    const readStream = createReadStream(compressedFile);
    const writeStream = createWriteStream(unCompressedFile);
    const unCompress = createBrotliDecompress();
    pipeline(readStream, unCompress, writeStream, (err)=> console.log(err))
};
