import { rename as renameFile, constants, access } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const fileExists = async (filePath) => {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const oldPath = path.resolve(__dirname, 'files/wrongFilename.txt');
  const newPath = path.resolve(__dirname, 'files/properFilename.md');

  try {
    if (!(await fileExists(oldPath))) throw new Error();
    if (await fileExists(newPath)) throw new Error();
    await renameFile(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
