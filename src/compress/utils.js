import fs from 'node:fs';
import { createGzip, createUnzip } from 'node:zlib';
import {
    getAbsPath,
} from '../utils/index.js';

export const compress = async (pathToFile, pathToDestination) => {
    const readStream = fs.createReadStream(getAbsPath(pathToFile));
    const writeStream = fs.createWriteStream(getAbsPath(pathToDestination));
    const compressStream = createGzip();

    readStream
      .pipe(compressStream)
      .pipe(writeStream);
  };
  
export const decompress = async (pathToFile, pathToDestination) => {
    const readStream = fs.createReadStream(getAbsPath(pathToFile));
    const writeStream = fs.createWriteStream(getAbsPath(pathToDestination));
    const decompressStream = createUnzip();

    readStream
      .pipe(decompressStream)
      .pipe(writeStream);
};

