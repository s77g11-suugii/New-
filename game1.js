const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attempt = 0;
const maxAttempt = 3;

function askChoice() {
  const options = ["haich", "chuluu", "dawuu"];
  const computer = options[Math.floor(Math.random() * 3)];

  if (attempt >= maxAttempt) {
    console.log("hojigdloo");
    rl.close();
    return;
  }

  rl.question("Аль нэгийг сонго: haich, chuluu, dawuu → ", (input) => {
    const userChoice = input.toLowerCase().trim();

    if (!options.includes(userChoice)) {
      console.log("zow bichne uu");
      askChoice();
      return;
    }

    attempt++;

    console.log("user songolt: ", userChoice);
    console.log("computer songolt: ", computer);

    if (userChoice === computer) {
      console.log("tentsew");
    } else if (
      (userChoice === "chuluu" && computer === "haich") ||
      (userChoice === "haich" && computer === "dawuu") ||
      (userChoice === "dawuu" && computer === "chuluu")
    ) {
      console.log("user ylaa");
    } else {
      console.log("computer ylaa");
    }
    console.log(`uldsen bolomj: ${maxAttempt - attempt}\n`);
    askChoice();
  });
}
askChoice();
