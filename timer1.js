const args = process.argv.slice(2).filter(x => x > 0).sort((a, b) => a - b); //take in argument from command line and sort in ascending order
const delArr = args.map(x => x * 1000); //multiply each value by 1000ms to convert delay into seconds
for (let index = 0; index < delArr.length; index++) { //loops through array and alerts for each timer
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`The ${delArr[index] / 1000}s timer has gone off!`); //prints what times was set off
  }, delArr[index]);
}