import {
  appendFile,
  rename,
  unlink,
} from 'node:fs/promises';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import {
  extname,
  basename,
  parse,
} from 'node:path';
import {
  getAbsPath,
  checkFileExist,
} from '../utils/index.js';

export const readFile = async (path) => {
  try {
    const readStream = createReadStream(getAbsPath(path));
    readStream.on('data', (buffer) => {
      console.log(buffer.toString());
    });
  } catch (error) {
    console.error(error);
  }
};

export const createFile = async (path) => {
  try {
    await appendFile(getAbsPath(path), '', { flaf: 'ax' });
  } catch (error) {
    console.error(error)
  }
};

export const renameFile = async (oldPath, newPath) => {
  try {
    await rename(getAbsPath(oldPath), getAbsPath(newPath));
  } catch (error) {
    console.error(error)
  }
};

export const removeFile = async (path) => {
  try {
    await unlink(getAbsPath(path));
  } catch (error) {
    console.error(error);
  }  
};

export const copyFile = async (oldPath, newPath) => {
  try {
    const oldAbsPath = getAbsPath(oldPath);
    const newAbsPath = getAbsPath(newPath);
    const oldFileName = basename(oldPath);
    const isExist = checkFileExist(newAbsPath + '/' + oldFileName);

    const extension = extname(oldPath);
    const baseName = basename(oldPath, extension);
    const newFileName = isExist ? `${baseName} copy${extension}`: oldFileName;

    const readStream = createReadStream(oldAbsPath);
    const writeStream = createWriteStream(newAbsPath + '/' + newFileName);

    readStream.pipe(writeStream);
  } catch (error) {
    console.error(error);
  }
};