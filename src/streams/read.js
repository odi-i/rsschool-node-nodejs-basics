import { stdout } from 'node:process';
import fs from 'node:fs';

export const FILE_TO_READ = './files/fileToRead.txt';

const read = async () => {
  fs.createReadStream(new URL(FILE_TO_READ, import.meta.url)).pipe(stdout);
};

await read();
