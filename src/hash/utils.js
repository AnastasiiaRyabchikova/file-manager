import { createHash } from 'node:crypto'
import { getAbsPath } from '../utils/index.js';

export const calculateHash = async (path) => {
  try {
    console.log(createHash('sha256')
      .update(getAbsPath(path))
      .digest('hex'));
  } catch (error) {
    console.error(error);
  }
};