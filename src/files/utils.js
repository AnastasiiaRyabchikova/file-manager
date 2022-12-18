import { appendFile } from 'node:fs/promises';

export const createFile = async (path) => {
  try {
    await appendFile(path, '', { flaf: 'ax' });
  } catch (error) {
    console.error(error)
  }
};