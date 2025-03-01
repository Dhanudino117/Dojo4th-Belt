const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let list = [];
readline.on("line", (input) => {
  list.push(input);
  if (list.length === 2) {
    let N = list[0];
    let M = list[1];

    let word = N.split(" ");
    let result = "";
    let lastIdx = -1;

    for (let i = word.length - 1; i >= 0; i--) {
      if (word[i] == M) {
        lastIdx = i;
        break;
      }
    }
    for (let i = 0; i < word.length; i++) {
      if (i === lastIdx) continue;
      result += (result ? " " : "") + word[i];
    }
    console.log(result);
    readline.close();
  }
});
