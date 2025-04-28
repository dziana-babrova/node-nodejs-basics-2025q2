import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import * as url from 'url';
import path from 'path';

const decompress = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const sourcePath = path.resolve(__dirname, 'archive.gz');
  const destinationPath = path.resolve(__dirname, 'fileToCompress.txt');

  const gzip = createUnzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  await pipeline(source, gzip, destination);
};

await decompress();
