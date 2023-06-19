import path from 'path';
import fs from 'fs';
import { exist } from '../functionality/index.js';
import { fileURLToPath } from 'url';
// implement function that renames file wrongFilename.txt to properFilename with extension .md
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

const rename = async () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const from = path.join(dirname, 'files', 'wrongFilename.txt');
  const to = path.join(dirname, 'files', 'properFilename.md');
  const isFileExist = await exist(from);
  const isFileRenamed = await exist(to);
  try {
    if (!isFileExist || isFileRenamed) throw new Exception();
    fs.promises.rename(from, to);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
