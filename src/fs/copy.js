import path from 'path';
import fs from 'fs';
import { exist } from '../functionality/index.js';
import { fileURLToPath } from 'url';

const copy = async () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const from = path.join(dirname, 'files');
  const destination = path.join(dirname, 'files_copy');
  const isDirFromExists = await exist(path.join(dirname, 'files'));
  const isDirDestinationExists = await exist(path.join(dirname, 'files_copy'));

  try {
    if (!isDirFromExists || isDirDestinationExists) {
      throw new Exception();
    }

    const files = await fs.promises.readdir(from);
    for (let file of files) {
      if (!!path.extname(file)) {
        if (!(await exist(path.join(dirname, 'files_copy')))) {
          await fs.promises.mkdir(destination);
        }
        const content = await (await fs.promises.readFile(path.join(from, file))).toString();
        await fs.promises.writeFile(path.join(destination, file), content);
      }
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
