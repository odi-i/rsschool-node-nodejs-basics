import fs from 'node:fs/promises';
import constants from './constants.js';

const list = async () => {
  await fs
    .readdir(new URL(constants.FILES_PATH, import.meta.url))
    .then((files) => console.log(files))
    .catch((err) => {
      throw new Error(
        err.code === 'ENOENT' ? constants.ERROR_TEXT : err.message
      );
    });
};

await list();
