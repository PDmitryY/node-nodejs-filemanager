import path from 'path';
import { createReadStream } from 'fs';

export const readFile = async (args) => {
    try {
        const fileToRead = path.join(process.cwd(), args.join(' '));
        const readStream = createReadStream(fileToRead, 'utf-8');
        readStream.on('data', (data)=>{
            process.stdout.write(data)
        })
      } catch (err) {
        throw new Error('Operation failed');
    }
};
