import path from 'path';
import fs from 'fs';
import {exist} from '../functionality/index.js';
import { fileURLToPath } from 'url';

// implement function that prints all array of filenames from files folder into console
//(if files folder doesn't exists Error with message FS operation failed must be thrown)

const list = async () => {
  const filename = fileURLToPath(import.meta.url)
  const dirname = path.dirname(filename);
  const dirPath = path.join(dirname, 'files');
  try {
    if(!await exist(dirPath)) throw new Exception()
    const files = await fs.promises.readdir(dirPath)
    for(let file of files){
      console.log(file)
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
