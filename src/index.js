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
import { copy } from './modules/copy.js';
import { move } from './modules/move.js';

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

const commands = {
	up: goUp,
	cd: changeDir,
	ls: list,
	cat: readFile,
	add: create,
	rn: renameFile,
	cp: copy,
	mv: move,
	rm: remove,
	// os: ,
	// hash: ,
	// compress: ,
	// decompress: ,
	".exit": () => {
		rl.close(),
		process.exit(0);
	},
};

export const lineParser = async (str) => {
	const [input, ...args] = str.trim().split(' ');
	// console.log("input", input);
	if(commands.hasOwnProperty(input)){
		Object.entries(commands).map((entry)=>{if(input == entry[0]) {
		// console.log("entr", entr);
		entry[1](args);
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