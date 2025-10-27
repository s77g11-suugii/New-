const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const utga = ["haich", "chuluu", "dawuu"];
const computer = utga[Math.floor(Math.random() * 3)];
rl.question("(haich, chuluu, dawuu)", (user) => {
  console.log("minii songolt: ", user);
  console.log("computeriin songolt: ", computer);
if (user === computer) {
    console.log("tentsew");
} else if ((user === "chuluu" && computer === "haich") || 
   (user === "haich" && computer === "dawuu") ||
   (user === "dawuu" && computer === "chuluu")) {
   console.log("user ylsan");
} else {
    console.log("computer ylsan");
}
  rl.close();
});
