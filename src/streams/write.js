import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import * as url from 'url';
import path from 'path';

const write = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.resolve(__dirname, 'files/fileToWrite.txt');
  const stream = createWriteStream(pathName, 'utf-8');
  stdin.pipe(stream);
};

await write();
