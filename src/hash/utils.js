import { createHash } from 'node:crypto'
import { getAbsPath } from '../utils/index.js';

export const calculateHash = async (path) => {
  try {
    createHash('sha256')
      .update(getAbsPath(path))
      .digest('hex');
  } catch (error) {
    console.error(error);
  }
};