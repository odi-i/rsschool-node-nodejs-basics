import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      callback(null, String(chunk).split('').reverse().join(''));
    },
  });

  stdin.pipe(reverseStream).pipe(stdout);
};

await transform();
