import {
  appendFile,
  rename,
} from 'node:fs/promises';
import { createReadStream } from 'node:fs';

export const readFile = async (path) => {
  try {
    const readStream = createReadStream(path);
    readStream.on('data', (buffer) => {
      console.log(buffer.toString());
    });
  } catch (error) {
    console.error(error);
  }
};

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

export const removeFile = async (path) => {
  try {
    await unlink(path);
  } catch (error) {
    throw new Error('FS operation failed');
  }  
};