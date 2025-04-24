import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import * as url from 'url';
import path from 'path';

const read = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.resolve(__dirname, 'files/fileToRead.txt');
  const stream = createReadStream(pathName, 'utf-8');
  stream.pipe(stdout);
};

await read();
