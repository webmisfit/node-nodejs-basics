import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exist } from '../functionality/index.js';

const create = async () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const filePath = path.join(dirname, 'files', 'fresh.txt');
  const isFileExist = await exist(filePath);
  try {
    if (isFileExist) {
      throw new Exception('file is exists');
    }
    await fs.promises.writeFile(filePath, 'I am fresh and young');
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
