import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  // const worker = new URL

  function calculateFunction(data) {
    return new Promise((resolve, reject) => {
      const worker = new Worker('src/wt/worker.js', { workerData });
      worker.on('message', resolve);
      worker.on('error', reject);
    });
  }
};

await performCalculations();
