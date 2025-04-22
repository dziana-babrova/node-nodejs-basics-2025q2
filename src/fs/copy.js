import { cp } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const copy = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const sourcePath = path.resolve(__dirname, 'files');
  const destinationPath = path.resolve(__dirname, 'files_copy');
  try {
    await cp(sourcePath, destinationPath, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await copy();
