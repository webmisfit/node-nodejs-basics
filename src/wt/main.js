import { Worker } from 'worker_threads';

function calculateFunction(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./src/wt/worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}

const performCalculations = async () => {
  console.log(await calculateFunction(35));
};

await performCalculations();
