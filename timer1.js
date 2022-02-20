const args = process.argv.slice(2).sort((a, b) => a - b); //take in argument from command line
const delArr = args.map(x => x * 1000);
for (k = 0; k < delArr.length; k++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delArr[k])
}
