import { calculateHash } from './utils.js';

const handleProcessHashInput = ([path]) => {
  console.log(calculateHash(path));
};

export const handlers = {
  hash: handleProcessHashInput,
};