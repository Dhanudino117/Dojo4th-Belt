const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];
readline.on("line", (input) => {
  list.push(input);
  if (list.length === 4) {
    let n = parseInt(list[0]);
    let arr1 = list[1].split(" ").map(Number);
    let m = parseInt(list[2]);
    let arr2 = list[3].split(" ").map(Number);

    let mergedArr = [];
    let i = 0,
      j = 0;
    while (i < n && j < m) {
      if (arr1[i] < arr2[j]) {
        mergedArr.push(arr1[i++]);
      } else {
        mergedArr.push(arr2[j++]);
      }
    }
    while (i < n) {
      mergedArr.push(arr1[i++]);
    }
    while (j < m) {
      mergedArr.push(arr2[j++]);
    }
    console.log(...mergedArr);
    readline.close();
  }
});
