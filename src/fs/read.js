import { readFile } from 'node:fs/promises';
import path from 'path';
import * as url from 'url';

const read = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.resolve(__dirname, 'files/fileToRead.txt');

  try {
    const content = await readFile(pathName, { encoding: 'utf-8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
