import { readdir } from 'fs/promises';

export const list = async () => {
    try {
        const content = await readdir(process.cwd(), {withFileTypes: true})
        const dirs = content.filter((item) => item.isDirectory()).sort((a,b) => (a.name - b.name))
        .map((item) => ({name: item.name, type: "directory"}));
        const files = content.filter((item) => item.isFile()).sort((a,b) => (a.name - b.name))
        .map((item) => ({name: item.name, type: "file"}));
        console.table([...dirs, ...files]);
    } catch (err) {
        throw new Error('Operation failed');
    }
};