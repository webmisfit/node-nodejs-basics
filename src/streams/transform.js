import { Transform } from "stream";
import {stdin, stdout} from 'process'


const __transform = new Transform({
    transform(chunk, enc, cb){
        chunk = chunk.toString().split('').reverse().join('')+'\r\n'
        cb(null, chunk)
    }
})

const transform = async () => {
    stdin.pipe(__transform).pipe(stdout)
};

await transform();