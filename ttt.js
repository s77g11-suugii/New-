const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//let attempt = 0;
//const maxAttempt = 3;

const userWinableValues = [1, 2, 0];

const convertToString = value => {
  let result;
  switch (value) {
    case 0:
      result = "chuluu";
      break;
    case 1:
      result = "haich";
      break;
    case 2:
      result = "daawuu";
      break;
  }
  return result;
};

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

async function game() {
  const userStrings = {
    chuluu: 0,
    haich: 1,
    daawuu: 2
  };

  let input = await ask("Yu gargah we (haich/chuluu/daawuu): ");
  const userValue = userStrings[input.toLowerCase()];

  if (userValue === undefined) {
    console.log("Buruu utga oruulsan baina!");
    return game(); 
  }

  //if (userValue < 1 || userValue > 3) {
      //console.log("zow bichne uu");
      //askChoice();
      //return;
    //}

    //attempt++;

  const compValue = Math.floor(Math.random() * 3 + 0);

  console.log("User:", convertToString(userValue));
  console.log("Computer:", convertToString(compValue));

  if (userValue === compValue) {
    console.log("Tentsew!");
  } else if (userWinableValues[userValue] === compValue) {
    console.log("User win");
  } else {
    console.log("Com win");
  }

  const playAgain = await ask("Dahin togloh uu? (1 - tiim, 0 - ugui): ");
  if (parseInt(playAgain) === 1) {
    return game(); 
  } else {
    rl.close();
  }
}
game();