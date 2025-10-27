const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

rl.question("too oruulna uu : ", (userInput) => {
    const userNumber = parseInt(userInput);
    if (userNumber === answer) {
        console.log("too zow.");
    } else {
        console.log(`too buruu.`);
    }
    rl.close();
});
