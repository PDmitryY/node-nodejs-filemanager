import { rename as giveNewName } from 'fs/promises';
import path from 'path';

export const renameFile = async (args) => {
    try {
        const oldNamePath = args[0];
        const newName = args[1];
        await giveNewName(oldNamePath, newName)
    } catch (err) {
        throw new Error('Operation failed');
    }
};
