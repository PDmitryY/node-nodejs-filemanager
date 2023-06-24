import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

console.log(`Welcome to the File Manager, Username!`);

// You are currently in path_to_working_directory


rl.on("close", () => {
    console.log(`\r\nThank you for using File Manager, Username, goodbye!`);
    process.exit(0);
  });