import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import * as url from 'url';
import path from 'path';

const runService = (workerData) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const workerPath = path.resolve(__dirname, 'worker.js');

  return new Promise((resolve) => {
    const worker = new Worker(workerPath, { workerData });
    worker.on('message', (message) => resolve({ status: 'resolved', data: message }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });
};

const performCalculations = async () => {
  const cores = cpus();
  const calculations = cores.map((_value, index) => runService(index + 10));
  const result = await Promise.all(calculations);

  console.log(result);
};

await performCalculations();
