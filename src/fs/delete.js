import { rm } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const remove = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.resolve(__dirname, 'files/fileToRemove.txt');

  try {
    await rm(pathName);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
