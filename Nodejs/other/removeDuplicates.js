const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];
readline.on("line", (input) => {
  list.push(input);
  if (list.length === 2) {
    let n = parseInt(list[0]);
    let arr = list[1].split(" ").map(Number);

    let unique = [];

    for (let i = 0; i < n; i++) {
      is_Dup = false;
      for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
          is_Dup = true;
        }
      }
      if (!is_Dup) {
        unique.push(arr[i]);
      }
    }
    console.log(...unique);
  }
});
