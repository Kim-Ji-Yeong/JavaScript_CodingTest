const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = [line];
}).on("close", () => {
  n = Number(input[0]);
  console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
});
