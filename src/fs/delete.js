import fs from 'fs';
import path from 'path';
import { dirName, fileName, exist } from '../functionality/index.js';

// implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

const remove = async () => {
  const __filename = fileName(import.meta.url);
  const __dirname = dirName(__filename);
  const filesPath = path.join(__dirname, 'files', 'fileToRemove.txt');
  try {
    if(!await exist(filesPath)) throw new Exception();
    await fs.promises.unlink(filesPath)
  } catch {
    throw new Error('FS operation failed')
  }
};

await remove();
