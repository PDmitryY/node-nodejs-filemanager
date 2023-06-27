import { writeFile } from 'fs/promises';
import path from 'path';

export const create = async (args) => {
    if(args) {
        const filePath = path.join(process.cwd(), args.join(' '))
        try {
            await writeFile(filePath,'', {flag:'wx'})
        } catch (err) {
            throw new Error('Operation failed')
        }
    };
};