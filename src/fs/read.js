import path from 'path';
import fs from 'fs';
import { dirName, fileName, exist } from '../functionality/index.js';

// implement function that prints content of the fileToRead.txt into console
//(if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

const read = async () => {
  const __filename = fileName(import.meta.url);
  const __dirname = dirName(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  try {
    if (!(await exist(filePath))) throw new Exception();
    console.log(await (await fs.promises.readFile(filePath)).toString());
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
