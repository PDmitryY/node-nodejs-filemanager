import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { homedir } from 'node:os';
import { list } from './modules/list.js';
import { create } from './modules/create.js'
import { goUp } from './modules/goUp.js'
import { changeDir } from './modules/changeDir.js';
import { readFile } from './modules/read.js';
import { renameFile } from './modules/rename.js';
import { remove } from './modules/remove.js';

const rl = readline.createInterface({ input, output });

const args = process.argv.slice(2);
let userName = args.reduce((acc, val, i, arr)=>{
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
currentDir();

const commandsMap = {
	cat: readFile,
	add: create,
	rn: renameFile,
	rm: remove,
	// os: ,
	// cp: ,
	// mv: ,
	// hash: ,
	// compress: ,
	// decompress: ,
	ls: list,
	up: goUp,
	cd: changeDir,
	".exit": () => {
		rl.close(),
		process.exit(0);
	},
};

export const lineParser = async (str) => {
	const [input, ...args] = str.trim().split(' ');
	// console.log("input", input);
	if(commandsMap.hasOwnProperty(input)){
		Object.entries(commandsMap).map((entr)=>{if(input == entr[0]) {
		// console.log("entr", entr);
		entr[1](args);
		}});
	} else {
		console.log("Operation failed\r\n");
	};
};

rl.on('line', async (input) => {
	await lineParser(input);
	currentDir();
});

rl.on("close", () => {
    console.log(`\r\nThank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  });