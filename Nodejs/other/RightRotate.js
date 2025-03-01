const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];
readline.on("line", (input) => {
  list.push(input);
  if (list.length === 2) {
    let [n, d] = list[0].split(" ").map(Number);
    let arr = list[1].split(" ").map(Number);

    d = d % n; // Handle cases where d > n

    // Right rotate in-place
    for (let i = 0; i < d; i++) {
      let temp = arr[n - 1]; // Store last element
      for (let j = n - 1; j > 0; j--) {
        arr[j] = arr[j - 1]; // Shift right
      }
      arr[0] = temp; // Move last element to front
    }

    console.log(...arr);
    readline.close();
  }
});
