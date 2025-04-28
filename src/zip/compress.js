import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import constants from './constants.js';

const compress = async () => {
  const gzipStream = createGzip();
  const readStream = createReadStream(
    new URL(constants.FILE_TO_COMPRESS, import.meta.url)
  );
  const writeStream = createWriteStream(
    new URL(constants.ARCHIVE_COMPRESS, import.meta.url)
  );

  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
