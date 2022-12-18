import os from 'node:os';
import { createHash } from 'node:crypto';

const handleProcessHashInput = ([path]) => {
  createHash(path);
};

export const handlers = {
  hash: handleProcessHashInput,
};