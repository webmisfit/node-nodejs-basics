import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  createReadStream('src/zip/files/archive.gz')
    .pipe(createUnzip())
    .pipe(createWriteStream('src/zip/files/fileToCompress.txt'));
};

await decompress();
