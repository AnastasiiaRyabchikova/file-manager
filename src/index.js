import process from 'node:process';
import { parseProcessArgs } from './utils/index.js';

const getCommandFromData = (data) => {
  const row = data.split(' ');

  return {
    command: row[0],
    args: row[1],
  };
};

const showCurrentDirName = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

const args = parseProcessArgs();

const handleProcessExit = () => {
  console.log(`Thank you for using File Manager, ${args.username}, goodbye!`);
  process.exit(0);
};

const handleProcessUpInput = () => {
  process.chdir('../');
};

const handleProcessCdInput = (path) => {
  if (!path) {
    return;
  }

  process.chdir(path);
};

process.stdin.on('data', (data) => {
  const {
    command,
    args,
  } = getCommandFromData(data.toString().trim());

  if (!command) {
    return;
  }

  if (command === '.exit') {
    handleProcessExit();
  }

  if (command === 'up') {
    handleProcessUpInput();
  }

  if (command === 'cd') {
    handleProcessCdInput(args);
  }

  showCurrentDirName();
});

process.on('SIGINT', handleProcessExit);
  
console.log(`Welcome to the File Manager, ${args.username}!`);
showCurrentDirName();