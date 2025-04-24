import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import * as url from 'url';
import path from 'path';

const calculateHash = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.resolve(__dirname, 'files/fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const stream = createReadStream(pathName);

  stream.on('readable', () => {
    const data = stream.read();
    if (data) hash.update(data);
    else {
      console.log(hash.digest('hex'));
    }
  });
};

await calculateHash();
