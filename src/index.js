import process from 'node:process';
import { handlers as navigationsHandlers } from './navigations/handlers.js';
import { handlers as fileHandlers } from './files/handlers.js';
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