import process from 'node:process';
import { readdir } from 'node:fs/promises';
import { parseProcessArgs } from './utils/index.js';

const getFilesList = async () => {
  try {
    const path = process.cwd();
    const files = await readdir(path, { withFileTypes: true });
    return files;
  } catch (err) {
    console.error(err);
  }
};

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
const username = args.username || 'Anonymous';

const handleProcessExit = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
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

const handleProcessLsInput = async () => {
  const files = await getFilesList();
  console.table(files
    .map(DirListItem.create)
    .sort((item1, item2) => (item1.weight - item2.weight))
  );
};

const handlers = {
  '.exit': handleProcessExit,
  up: handleProcessUpInput,
  cd: handleProcessCdInput,
  ls: handleProcessLsInput,
};

process.stdin.on('data', (data) => {
  const {
    command,
    args,
  } = getCommandFromData(data.toString().trim());

  if (!command) {
    return;
  }

  handlers[command](args);

  showCurrentDirName();
});

process.on('SIGINT', handleProcessExit);
console.log(`Welcome to the File Manager, ${username}!`);
showCurrentDirName();