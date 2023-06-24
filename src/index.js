import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let userName = process.argv.slice(2).reduce((acc, val, i, arr)=>{
  if(val.startsWith('--username=')){
      acc.push(`${val.slice(11)}`);
  }
  return acc;
}, []).join(' ');

if (userName === '') {userName = 'Default user'};

console.log(`Welcome to the File Manager, ${userName}!`);


const currentDir = async () => {
  console.log(`You are currently in ${process.cwd()}`);
};
currentDir()

rl.on("close", () => {
    console.log(`\r\nThank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  });