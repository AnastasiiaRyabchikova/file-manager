import os from 'node:os';

const functionsByFlags = {
  EOL: () => {
    console.log(os.EOL);
  },
  cpus: () => {
    console.log(os.cpus());
  },
  homedir: () => {
    console.log(os.homedir());
  },
  username: () => {
    const userInfo = os.userInfo();
    console.log(userInfo.username);
  },
  architecture: () => {
    console.log(os.arch());
  },
};


const handleProcessOsInput = ([flag]) => {
  const value = flag.slice(2);

  if (!functionsByFlags[value]) {
    return;
  }

  functionsByFlags[value]()
};

export const handlers = {
  os: handleProcessOsInput,
};
