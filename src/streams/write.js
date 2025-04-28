import { stdin } from 'node:process';
import fs from 'node:fs';

const FILE_TO_WRITE = './files/fileToWrite.txt';

const write = async () => {
  stdin.pipe(fs.createWriteStream(new URL(FILE_TO_WRITE, import.meta.url)));
};

await write();
