const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempt = 0;
let maxAttempt = 3;

function askChoice() {
    if (attempt >= maxAttempt) {
        console.log(`hojigdloo <<computeriin too ${answer}>>`);
        rl.close();
        return;
    }

    rl.question("too oruulna uu : ", (userInput) => {
        const userNumber = parseInt(userInput);

        attempt++;

        if (userNumber === answer) {
            console.log("too zow.");
            rl.close();
        } else {
            console.log(`too buruu`);
            if (userNumber < answer) {
                console.log("too baga");
            } else {
                console.log("too ih");
            } 
             console.log(`Uldsen bolomj: ${maxAttempt - attempt}`);
            askChoice(); 
        }
    });
}
askChoice();
