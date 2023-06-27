import { rm } from 'fs/promises';

export const remove = async (args) => {
    try {
        await rm(args.join(' '));
    } catch (err) {
        throw new Error('Operation failed');
    }
};
