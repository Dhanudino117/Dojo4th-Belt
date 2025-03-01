const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (S) => {
  let compressed = "";
  let count = 1;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1]) {
      count++; 
    } else {
      compressed += S[i] + count; 
    }
  }

  console.log(compressed);
  readline.close();
});
