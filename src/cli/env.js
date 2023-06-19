const parseEnv = () => {
  const x = [];
  for (let [key, value] of Object.entries(process.env)) {
    if (key.startsWith('RSS_')) {
      x.push(`${key}=${value}`);
    }
  }
  console.log(x.join('; '));
};

parseEnv();
