import process from 'node:process';
import { DirListItem } from './entities/DirListItem.js';
import { getFilesList } from './utils.js';


const handleProcessUpInput = () => {
  process.chdir('../');
};

const handleProcessCdInput = (path) => {
  if (!path) {
    return;
  }

  process.chdir(path);
};

const handleProcessLsInput = async () => {
  const files = await getFilesList();
  console.table(files
    .map(DirListItem.create)
    .sort((item1, item2) => (item1.weight - item2.weight))
  );
};

export const handlers = {
  up: handleProcessUpInput,
  cd: handleProcessCdInput,
  ls: handleProcessLsInput,
};
