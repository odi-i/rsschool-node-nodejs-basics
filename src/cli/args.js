const parseArgs = () => {
  const formattedArr = [];
  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i += 2) {
    formattedArr.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
  }

  console.log(formattedArr.join(', '));
};

parseArgs();
