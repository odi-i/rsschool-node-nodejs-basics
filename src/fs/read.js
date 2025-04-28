import fs from 'node:fs/promises';
import constants from './constants.js';

const read = async () => {
  await fs
    .readFile(new URL(constants.READ_FILE_PATH, import.meta.url), {
      encoding: 'utf8',
    })
    .then((files) => console.log(files))
    .catch((err) => {
      throw new Error(
        err.code === 'ENOENT' ? constants.ERROR_TEXT : err.message
      );
    });
};

await read();
