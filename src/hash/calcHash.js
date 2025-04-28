import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { createHash } from 'node:crypto';

const FILE_PATH = './files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(new URL(FILE_PATH, import.meta.url));

  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
