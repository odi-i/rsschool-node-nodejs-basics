import fs from 'node:fs/promises';
import constants from './constants.js';

const create = async () => {
  await fs
    .writeFile(
      new URL(constants.CREATE_PATH, import.meta.url),
      constants.CREATE_TEXT,
      {
        flag: 'wx',
      }
    )
    .catch((err) => {
      throw new Error(
        err.code === 'EEXIST' ? constants.ERROR_TEXT : err.message
      );
    });
};

await create();
