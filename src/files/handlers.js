import {
  createFile,
  renameFile,
  removeFile,
  readFile,
} from "./utils.js";

const handleProcessCatInput = ([path]) => {
  readFile(path);
};

const handleProcessAddInput = ([path]) => {
  createFile(path);
};

const handleProcessRnInput = (args) => {
  renameFile(args[0], args[1]);
};

const handleProcessCpInput = ([newPath, oldPath]) => {
  console.log('cp', { newPath, oldPath });
};

const handleProcessMvInput = ([ newPath, oldPath ]) => {
  console.log('mv', { newPath, oldPath });
};

const handleProcessRmInput = ([ path ]) => {
  removeFile(path);
};


export const handlers = {
  cat: handleProcessCatInput,
  add: handleProcessAddInput,
  rn: handleProcessRnInput,
  cp: handleProcessCpInput,
  mv: handleProcessMvInput,
  rm: handleProcessRmInput,
};
