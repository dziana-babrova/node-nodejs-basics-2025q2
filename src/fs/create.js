import { writeFile } from 'fs/promises';
import { Buffer } from 'node:buffer';
import path from 'path';
import * as url from 'url';

const create = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.resolve(__dirname, 'files/fresh.txt');
  const data = new Uint8Array(Buffer.from('I am fresh and young'));

  try {
    await writeFile(pathName, data, { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
