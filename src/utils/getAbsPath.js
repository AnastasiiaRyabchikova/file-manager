import process from 'node:process';
import { join, normalize } from 'node:path';

export const getAbsPath = (path = '') => {
  try {
    return normalize(join(process.cwd(), path));
  } catch (error) {
    console.error(error);
  }
};
