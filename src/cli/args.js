const parseArgs = () => {
  const arg = process.argv;
  let x = [];
  for (let i = 2; i < arg.length; i += 2) {
    x.push(`${arg[i].slice(2)} is ${arg[i + 1]}`);
  }
  console.log(x.join(', '));
};

parseArgs();
