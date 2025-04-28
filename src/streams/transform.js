import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _encoding, callback) {
      const data = `${chunk.toString().split('').reverse().slice(1).join('')}\n`;

      callback(null, data);
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

await transform();
