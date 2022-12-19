import path from 'path';
import { fileURLToPath } from 'url';
import {stat} from 'fs/promises'

export const dirName = (fileName) => path.dirname(fileName);
export const fileName = (url) => fileURLToPath(url);

export const exist = async (path) => {
    try{
      await stat(path)
      return true
    } catch{
        return false
    }
}


// export {dirname, filename}