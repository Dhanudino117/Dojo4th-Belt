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
 
    // Left rotate in-place
    for (let i = 0; i < d; i++) {
      let temp = arr[0]; // Store first element
      for (let j = 0; j < n - 1; j++) {
        arr[j] = arr[j + 1]; // Shift left
      }
      arr[n - 1] = temp; // Move first element to end
    }

    console.log(...arr);
    readline.close();
  }
});
