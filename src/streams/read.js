import { createReadStream } from "fs";
import { stdout } from "process";

const read = async () => {
    const readStream = createReadStream('src/streams/files/fileToRead.txt')
    readStream.pipe(stdout) 
};

await read();