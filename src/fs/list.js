import path from 'path';
import fs from 'fs';
import { dirName, fileName} from '../functionality/index.js';

// implement function that prints all array of filenames from files folder into console
//(if files folder doesn't exists Error with message FS operation failed must be thrown)

const list = async () => {
  const __filename = fileName(import.meta.url);
  const __dirname = dirName(__filename);
  const dirPath = path.join(__dirname, 'files');
  try {
    fs.readdir(dirPath, (err, files) => {
      if (err) throw new Exception();
      console.log(files);
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
