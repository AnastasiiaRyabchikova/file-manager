import fs from 'node:fs';
import { createGzip, unzip } from 'node:zlib';
import { promisify } from 'node:util';
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
  
const do_unzip = promisify(unzip);

export const decompress = async () => {
    const readStream = fs.createReadStream(getAbsPath(pathToFile));
    const writeStream = fs.createWriteStream(getAbsPath(pathToDestination));

    readStream.on('data', async (buffer) => {
        const str = await do_unzip(buffer);
        writeStream.write(str);
    });
};

