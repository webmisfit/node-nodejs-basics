import path from 'path';
import fs from 'fs';
import { dirName, fileName, exist } from '../functionality/index.js';

// implement function that renames file wrongFilename.txt to properFilename with extension .md
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

const rename = async () => {
  const __filename = fileName(import.meta.url);
  const __dirname = dirName(__filename);
  const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const renamedPath = path.join(__dirname, 'files', 'properFilename.md');
  try {
    if (!await exist(filePath) || await exist(renamedPath)) throw new Exception();
    await fs.promises.rename(filePath, renamedPath)
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
