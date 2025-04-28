import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv.slice(2);
  const result = args
    .reduce((accumulator, nextValue, index) => {
      const key = nextValue;
      const value = args[index + 1];
      if (index % 2 === 0) accumulator.push(`${key} is ${value}`);
      return accumulator;
    }, [])
    .join(', ');
  console.log(result);
};

parseArgs();
