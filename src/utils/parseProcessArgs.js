import process from 'node:process';

export const parseProcessArgs = () => {
  const args = process.argv.slice(2)
    .reduce((acc, cur) => {
      const [key, value] = cur.split('=');
      acc[key.slice(2)] = value;
      return acc;
    }, {});
  
  return args;
};
