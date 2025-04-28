import fs from 'node:fs/promises';
import constants from './constants.js';

const copy = async () => {
  await fs
    .cp(
      new URL(constants.FILES_PATH, import.meta.url),
      new URL(constants.COPY_DEST_PATH, import.meta.url),
      { recursive: true, force: false, errorOnExist: true }
    )
    .catch((err) => {
      throw new Error(
        err.code === 'ERR_FS_CP_EEXIST' ? constants.ERROR_TEXT : err.message
      );
    });
};

await copy();
