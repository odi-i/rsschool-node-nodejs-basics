const PREFIX = 'RSS_';

const parseEnv = () => {
  const value = Object.entries(process.env)
    .filter(([key]) => key.includes(PREFIX))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(value);
};

parseEnv();
