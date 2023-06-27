import { cpus, EOL, homedir, arch, userInfo } from 'os';

export const osCommands = async (args) => {
    switch(args[0]) {
        case '--EOL': {
            console.log(JSON.stringify(EOL));
            break;
        }
        case '--cpus': {
            console.log(`Amount of CPUS: ${cpus().length}`);
            cpus().forEach((cpu) => {
            console.log(`${cpu.model} / ${cpu.speed / 1000} GHz`);
            })
            break;
        }
        case '--homedir': {
            console.log(homedir());
            break;
        }
        case '--username': {
            console.log(userInfo().username);
            break;
        }
        case '--architecture': {
            console.log(arch());
            break;
        }
        default: {
            throw new Error('Operation failed');
        }
    }
}