import fs from 'fs';
import path from 'path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename);
  const content = await (
    await fs.promises.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'))
  ).toString();
  console.log(createHash('sha256').update(content).digest('hex'))
};

await calculateHash();
