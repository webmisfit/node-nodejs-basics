import path from 'path';
import fs from 'fs';
import { dirName, fileName, exist } from '../functionality/index.js';

// implement function that prints all array of filenames from files folder into console
//(if files folder doesn't exists Error with message FS operation failed must be thrown)

const list = async () => {
  const __filename = fileName(import.meta.url);
  const __dirname = dirName(__filename);
  const dirPath = path.join(__dirname, 'files');
  try {
    if (!(await exist(dirPath))) throw new Exception();

    fs.readdir(dirPath, (err, files) => {
      console.log(files);
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
