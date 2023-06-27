import { resolve } from 'path';

export const changeDir = (args) => {
    console.log("cd args", args[0]);
    try {
        process.chdir(resolve(args[0]));
    } catch (error) {
        console.log("\r\nOperation failed");
    }
}