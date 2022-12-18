import { appendFile, rename } from 'node:fs/promises';

export const createFile = async (path) => {
  try {
    await appendFile(path, '', { flaf: 'ax' });
  } catch (error) {
    console.error(error)
  }
};

export const renameFile = async (oldPath, newPath) => {
  try {
    await rename(oldPath, newPath);
  } catch (error) {
    console.error(error)
  }
};