//const readline = require("readline");

//const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//});

//let attempt = 0;
//const maxAttempt = 3;

//function askChoice() {
//  const options = ["haich", "chuluu", "dawuu"];
//  const computer = options[Math.floor(Math.random() * 3)];

//  if (attempt >= maxAttempt) {
//    console.log("hojigdloo");
//    rl.close();
//    return;
//  }

//  rl.question("Аль нэгийг сонго: haich, chuluu, dawuu → ", (input) => {
//    const userChoice = input.toLowerCase().trim();

//    if (!options.includes(userChoice)) {
//      console.log("zow bichne uu");
//      askChoice();
//      return;
//    }

//    attempt++;

//    console.log("user songolt: ", userChoice);
//    console.log("computer songolt: ", computer);

//    if (userChoice === computer) {
//      console.log("tentsew");
//    } else if (
//      (userChoice === "chuluu" && computer === "haich") ||
//      (userChoice === "haich" && computer === "dawuu") ||
//      (userChoice === "dawuu" && computer === "chuluu")
//    ) {
//      console.log("user ylaa");
//    } else {
//      console.log("computer ylaa");
//    }
//    console.log(`uldsen bolomj: ${maxAttempt - attempt}\n`);
//    askChoice();
//  });
//}
//askChoice();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attempt = 0;
const maxAttempt = 3;

function askChoice() {

  const options = ["haich", "chuluu", "dawuu"];
  const h1 = options[0];
  const h2 = options[1];
  const h3 = options[2];

  //const options = ["0", "1", "2"];

  const computer = options[Math.floor(Math.random() * 3)];

  if (attempt >= maxAttempt) {
    console.log("hojigdloo");
    rl.close();
    return;
  } 

  rl.question("ali negiin songo: 1-haich, 2-chuluu, 3-dawuu → ", (input) => {

    const number = parseInt(input);

    const userChoice = options[number - 1];

    if (number < 1 || number > 3) {
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
      //      (userChoice === "1" && computer === "0") ||
      //      (userChoice === "0" && computer === "2") ||
      //      (userChoice === "2" && computer === "1")
      (userChoice > computer) ||
      (userChoice < computer)
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
