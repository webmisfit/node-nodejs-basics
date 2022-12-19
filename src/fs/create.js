import fs from 'fs';
import path from 'path';
import {dirName, fileName, exist} from '../functionality/index.js';
//  implement function that creates new file fresh.txt with content 
//  "I am fresh and young" 
//  inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
   const __filename = fileName(import.meta.url);
   const __dirname = dirName(__filename)
   const filePath = path.join(__dirname, 'files', 'fresh.txt')
   try{
     if (await exist(filePath)) throw new Exception();
     await fs.promises.writeFile(filePath, 'I am fresh and young')
   } catch{
     throw new Error('FS operation failed')
   }
};

await create();