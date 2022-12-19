import {
  compress,
  decompress,
} from "./utils.js";

const handleProcessCompressInput = ([pathToFile, pathToDestination]) => {
  compress(pathToFile, pathToDestination);
};

const handleProcessDecompresInput = ([pathToFile, pathToDestination]) => {
  decompress(pathToFile, pathToDestination);
};

export const handlers = {
  compress: handleProcessCompressInput,
  decompress: handleProcessDecompresInput,
};
