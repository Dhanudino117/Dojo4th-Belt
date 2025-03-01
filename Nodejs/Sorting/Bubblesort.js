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

    for (let i = 0; i < arr.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    console.log(...arr);
    readline.close();
  }
}); 
