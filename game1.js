const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askChoice() {
  const options = ["haich", "chuluu", "dawuu"];
  const computer = options[Math.floor(Math.random() * 3)];

  rl.question("ali negiin songono uu haich, chuluu, dawuu: ", (input) => {
    const userChoice = input.toLowerCase().trim();

    console.log("minii songolt:", userChoice);
    console.log("computeriin songolt:", computer);

    if (!options.includes(userChoice)) {
      console.log("zow bichne uu");
      return askChoice();
    } else if (userChoice === computer) {
      console.log("tentsew");
    } else if (
      (userChoice === "chuluu" && computer === "haich") ||
      (userChoice === "haich" && computer === "dawuu") ||
      (userChoice === "dawuu" && computer === "chuluu")
    ) {
      console.log("user ylsan");
    } else {
      console.log("computer ylsan");
    }
    rl.close();
  });
}
askChoice();
