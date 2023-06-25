import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { homedir } from 'node:os';
import { list } from './modules/list.js';

const rl = readline.createInterface({ input, output });

let userName = process.argv.slice(2).reduce((acc, val, i, arr)=>{
  if(val.startsWith('--username=')){
      acc.push(`${val.slice(11)}`);
  }
  return acc;
}, []).join(' ');

if (userName === '') {userName = 'Default user'};

console.log(`Welcome to the File Manager, ${userName}!`);

process.chdir(homedir())

const currentDir = async () => {
  console.log(`You are currently in ${process.cwd()}`);
};
currentDir()

const commandsMap = {
  // cat: readFile,
  // add: addFile,
  // rn: renameFile,
  // rm: removeFile,
  // os: handleOs,
  // cp: cpFile,
  // mv: moveFile,
  // hash: handleHash,
  // compress: handleCompress,
  // decompress: handleDecompress,
  ls: list,
  // up: handleUp,
  // cd: handleCd,
  ".exit": () => {
    rl.close(),
    process.exit(0);
  },
};

export const lineParser = async (str) => {
  const input = str.trim();
  // console.log("input", input);
  Object.entries(commandsMap).map((entr)=>{if(input == entr[0]) {
    // console.log("entr", entr);
    entr[1]();
  }})
};

rl.on('line', async (input) => {
  await lineParser(input);
  currentDir();
});

rl.on("close", () => {
    console.log(`\r\nThank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  });