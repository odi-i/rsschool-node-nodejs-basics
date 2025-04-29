import { spawn } from 'node:child_process';
import path from 'path';

const SCRIPT_PATH = './files/script.js';

const spawnChildProcess = async (args) => {
  const child = spawn(
    'node',
    [path.resolve(import.meta.dirname, SCRIPT_PATH), ...args],
    {
      stdio: 'inherit',
    }
  );

  child.on('error', (err) => {
    console.log(`child process error: ${err}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
