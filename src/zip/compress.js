import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
// import { pipeline } from 'node:stream';
// import { promisify } from 'node:util';
// const pipe = promisify(pipeline);

const compress = async () => {
  //   const gzip = createGzip();
  //   const source = createReadStream('src/zip/files/fileToCompress.txt');
  //   const destination = createWriteStream(`src/zip/files/archive.gz`);
  //   await pipe(source, gzip, destination);
  createReadStream('src/zip/files/fileToCompress.txt')
    .pipe(createGzip())
    .pipe(createWriteStream(`src/zip/files/archive.gz`));
};

await compress();
