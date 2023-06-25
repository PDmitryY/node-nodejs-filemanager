import { writeFile } from 'fs/promises';
import path from 'path';


export const create = async (args) => {
    console.log('args', args);
    if(args) {
        const filePath = path.join(process.cwd(), args.toString())
        // console.log(filePath);
        try {
            await writeFile(filePath,'', {flag:'wx'})
        } catch (err) {
            throw new Error('Operation failed')
        }
    };
};

create();