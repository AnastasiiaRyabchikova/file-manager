import { readdir } from 'node:fs/promises';

export const getFilesList = async () => {
  try {
    const path = process.cwd();
    const files = await readdir(path, { withFileTypes: true });
    return files;
  } catch (err) {
    console.error(err);
  }
};