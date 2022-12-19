import path from 'path';
import fs from 'fs'
import {dirName, fileName} from '../functionality/index.js'

const copy = async () => {
  const __filename = fileName(import.meta.url);
  const __dirname = dirName(__filename)
  const filesCopyPath = path.join(__dirname, 'files_copy')
  const filesPath = path.join(__dirname, 'files')
 try{
    if (fs.existsSync(filesCopyPath) || !fs.existsSync(filesPath)) throw new Exception();
    await fs.promises.mkdir(filesCopyPath)
    const files = await fs.promises.readdir(filesPath)
    for (let file of files) {
        const txt = await (await fs.promises.readFile(path.join(filesPath, file))).toString()
        await fs.promises.writeFile(path.join(filesCopyPath, file), txt)
    }
 }
 catch{
    throw new Error('FS operation failed')
 }
};

await copy();
