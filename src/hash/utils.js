import { createHash } from 'node:crypto'
import { getAbsPath } from '../utils/index.js';

export const calculateHash = (path) => {
  try {
    return createHash('sha256')
      .update(getAbsPath(path))
      .digest('hex');
  } catch (error) {
    console.error(error);
  }
};