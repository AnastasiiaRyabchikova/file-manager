import process from 'node:process';
import { handlers as navigationsHandlers } from './navigations/handlers.js';
import { handlers as fileHandlers } from './files/handlers.js';
import { handlers as osHandlers } from './os/handlers.js';
import { handlers as hashHandlers } from './hash/handlers.js';
import { handlers as compressHandlers } from './compress/handlers.js';
import { parseProcessArgs } from './utils/index.js';

const getCommandFromData = (data) => {
  const row = data.split(' ');

  return {
    command: row[0],
    args: row.slice(1),
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

const handlers = {
  '.exit': handleProcessExit,
  ...navigationsHandlers,
  ...fileHandlers,
  ...osHandlers,
  ...hashHandlers,
  ...compressHandlers,
};

process.stdin.on('data', (data) => {
  const {
    command,
    args,
  } = getCommandFromData(data.toString().trim());

  if (!command) {
    return;
  }

  if (!handlers[command]) {
    console.error('Invalid input');
  } else {
    handlers[command](args);
  }


  showCurrentDirName();
});

process.on('SIGINT', handleProcessExit);
console.log(`Welcome to the File Manager, ${username}!`);
showCurrentDirName();