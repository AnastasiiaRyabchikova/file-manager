import { createFile, renameFile } from "./utils.js";

const handleProcessAddInput = ([path]) => {
  createFile(path);
};

const handleProcessRnInput = (args) => {
  renameFile(args[0], args[1]);
};

export const handlers = {
  add: handleProcessAddInput,
  rn: handleProcessRnInput
};
