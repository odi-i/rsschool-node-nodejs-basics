import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const WORKER_PATH = './worker.js';
const CORES_NUMBER = cpus().length;

const createWorker = (i) =>
  new Promise((resolve) => {
    const worker = new Worker(new URL(WORKER_PATH, import.meta.url));

    worker.postMessage(10 + i);

    worker.on('message', (data) => resolve({ status: 'resolved', data }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });

const performCalculations = async () => {
  const workerPromises = [];

  for (let i = 0; i < CORES_NUMBER; i++) {
    workerPromises.push(createWorker(i));
  }
  await Promise.all(workerPromises).then((data) => console.log(data));
};

await performCalculations();
