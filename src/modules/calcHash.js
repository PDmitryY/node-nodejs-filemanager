import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

export const calculateHash = async (args) => {
    try {
        const content = await readFile(args[0]);
        const hash =  createHash('sha256').update(content).digest('hex');
        console.log(hash)
    } catch (err) {
        throw new Error('Operation failed');
    }
};
