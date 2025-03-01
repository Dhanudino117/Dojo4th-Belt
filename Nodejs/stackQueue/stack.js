const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];

readline.on("line", (input) => {
  list.push(input);
  if (list.length === parseInt(list[0]) + 1) {
    // Ensure all input lines are read
    let [N, S] = list[0].split(" ").map(Number);
    let stack = [];

    for (let i = 1; i <= N; i++) {
      let command = list[i].split(" ");

      if (command[0] === "push") {
        let x = parseInt(command[1]);
        if (stack.length < S) {
          stack.push(x);
        } else {
          console.log("stack overflow");
        }
      } else if (command[0] === "pop") {
        if (stack.length > 0) {
          console.log(stack.pop());
        } else {
          console.log("stack underflow");
        }   
      } else if (command[0] === "top") {
        if (stack.length > 0) {
          console.log(stack[stack.length - 1]);
        } else {
          console.log("stack underflow");
        }
      }
    }

    readline.close();
  }
});
