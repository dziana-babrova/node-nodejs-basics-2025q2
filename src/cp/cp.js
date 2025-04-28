import { spawn } from 'node:child_process';
import * as url from 'url';
import path from 'path';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const scriptPath = path.resolve(__dirname, 'files/script.js');

  const childProcess = spawn('node', [scriptPath, ...args]);

  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([4, 5]);
