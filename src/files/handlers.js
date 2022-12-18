import { createFile } from "./utils.js";

const handleProcessAddInput = ([path]) => {
  createFile(path);
};

const handleProcessRnInput = (args) => {
  console.log(args);
  // createFile(path);
};

export const handlers = {
  add: handleProcessAddInput,
  rn: handleProcessRnInput
};
