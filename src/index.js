import process from 'node:process';
import { parseProcessArgs } from './utils/index.js';

const args = parseProcessArgs();

const handleProcessExit = () => {
  console.log(`Thank you for using File Manager, ${args.username}, goodbye!`);
  process.exit(0);
};

process.stdin.on('data', (data) => {
  const command = data.toString().trim();

  if (command === '.exit') {
    handleProcessExit();
  }
});

process.on('SIGINT', handleProcessExit);
  
console.log(`Welcome to the File Manager, ${args.username}!`);