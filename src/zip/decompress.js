import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import constants from './constants.js';

const decompress = async () => {
  const unzipStream = createUnzip();
  const readStream = createReadStream(
    new URL(constants.ARCHIVE_COMPRESS, import.meta.url)
  );
  const writeStream = createWriteStream(
    new URL(constants.FILE_TO_COMPRESS, import.meta.url)
  );

  readStream.pipe(unzipStream).pipe(writeStream);
};

await decompress();
