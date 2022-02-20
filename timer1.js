const args = process.argv.slice(2).filter(x => x > 0).sort((a, b) => a - b); //take in argument from command line
const delArr = args.map(x => x * 1000);
console.log(delArr);
for (k = 0; k < delArr.length; k++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delArr[k])
}
