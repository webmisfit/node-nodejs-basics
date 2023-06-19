import path from 'path';
import fs from 'fs';
import {exist } from '../functionality/index.js';
import { fileURLToPath } from 'url';
// implement function that prints content of the fileToRead.txt into console
//(if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

const read = async () => {
  const filename = fileURLToPath(import.meta.url)
  const dirname = path.dirname(filename)
  const filePath = path.join(dirname, 'files', 'fileToRead.txt');
  try {
    if (!(await exist(filePath))) throw new Exception();
    console.log(await (await fs.promises.readFile(filePath)).toString());
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
