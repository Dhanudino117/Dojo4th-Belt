const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];

readline.on("line", (input) => {
  list.push(input);
  if (list.length === 2) {
    let a = parseInt(list[0]);
    let arr = list[1].split(" ").map(Number);
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      if (min_idx !== i) {
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
      }
    }
    console.log(...arr);
  }
});
