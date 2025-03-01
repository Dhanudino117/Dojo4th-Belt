const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (input) => {
  let [x, n] = input.split(" ").map(Number); // Read both x and n in one line

  function power(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / power(x, -n);

    let half = power(x, Math.floor(n / 2));
    return n % 2 === 0 ? half * half : x * half * half;
  }

  let result = power(x, n);
  console.log(result.toFixed(2)); // Print result rounded to 2 decimal places

  readline.close();
});
