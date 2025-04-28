import fs from 'node:fs/promises';
import constants from './constants.js';

const remove = async () => {
  await fs.rm(new URL(constants.RM_PATH, import.meta.url)).catch((err) => {
    throw new Error(err.code === 'ENOENT' ? constants.ERROR_TEXT : err.message);
  });
};

await remove();
