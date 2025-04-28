import fs from 'node:fs/promises';
import constants from './constants.js';

const rename = async () => {
  await fs
    .rename(
      new URL(constants.RENAME_OLD_PATH, import.meta.url),
      new URL(constants.RENAME_NEW_PATH, import.meta.url)
    )
    .catch((err) => {
      throw new Error(
        err.code === 'ENOENT' ? constants.ERROR_TEXT : err.message
      );
    });
};

await rename();
