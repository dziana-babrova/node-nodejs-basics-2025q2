import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import * as url from 'url';
import path from 'path';

const compress = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const sourcePath = path.resolve(__dirname, 'files/fileToCompress.txt');
  const destinationPath = path.resolve(__dirname, 'archive.gz');

  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  await pipeline(source, gzip, destination);
};

await compress();
