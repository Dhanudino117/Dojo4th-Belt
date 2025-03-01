const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];

readline.on("line", (input) => {
  list.push(input);
  if (list.length === 2) {
    let S = list[0];
    let W = list[1];

    let words = S.split(" ");
    let result = "";
    let removed = false;

    for (let i = 0; i < words.length; i++) {
      if (words[i] === W && !removed) {
        removed = true;
        continue;
      }
      result += (result ? " " : "") + words[i];
    }

    console.log(result);
    readline.close();
  }
});
