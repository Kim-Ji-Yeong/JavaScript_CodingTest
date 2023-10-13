const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const Arr = line.split(" ");
    console.log(Arr.join(""));
  });
