const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: "1. chi odoo haana bna we\nA) Mongol us\nB) gertee\nC) ajil deeree\nD) noild\n",
    answer: "a"
  },
  {
    question: "2. moson deer mongon ayga ter yu we\nA) nar\nB) sar\nC) olz\nD) bayn ail\n",
    answer: "c"
  },
  {
    question: "3. usand orj bhdaa sheej baisan uu\nA) tiim\nB) ugui\nC) magadgui\nD) ugui\n",
    answer: "a"
  },
  {
    question: "4. awdar deer altan ayga ter yu we\nA) nar\nB) sar\nC) olz\nD) bayn ail\n",
    answer: "d"
  },
  {
    question: "5. shine mashin heden duguitai we\nA) 3\nB) 4\nC) 5\nD) 6\n",
    answer: "c"
  },
  {
    question: "6. orj ireed 20 jil bolsn mashin hden duguitai we\nA) 0\nB) 1\nC) 2\nD) 3\nE) 4\n",
    answer: "a"
  },
  {
    question: "7. mongold heden jil ajlaj baij bairtai boloh we\nA) 10\nB) 15\nC) 20\nD) 25\n",
    answer: "c"
  },
  {
    question: "8. mongol ulsiin hamgiin ih ahidag bayr\nA) tsagaan sar\nB) shine jil\nC) baasan ah\nD) tsergiin bayr\n",
    answer: "c"
  },
  {
    question: "9. ygaad muur computeriin gar deer suudin bol\nA) untah gej\nB) internet oroo post oruulah gej\nC) zugeer baigaa baidaln\nD) eznee huleej bgaa\n",
    answer: "b"
  },
  {
    question: "10. utas untarchij odoo tsag hed bolj bna we\nA) Batmonkh ahaas asuu\nB) medehgui\nC) Tsermaagaas asuu\nD) Utasaa haraad helne\n",
    answer: "a"
  },
];

let score = 0;
let index = 0;

function askQuestion() {
  if (index < questions.length) {
    rl.question(questions[index].question, (userAnswer) => { 

  //if (answer < a || answer > e) {
  //    console.log("zow bichne uu");
  //    askChoice();
  //   return;
  //  }

      if (userAnswer.toLowerCase() === questions[index].answer) {
        console.log("Зөв!\n");
        score++;
      } else {
        console.log("Буруу!\n");
      }
      index++;
      askQuestion();
    });
  } else {
  function myGrading(score) {
    const percentage = (score / questions.length) * 100;
    let gscore;

    switch(true) {
        case (percentage >= 90):
            gscore = 'A';
            break;
        case (percentage >= 80):
            gscore = 'B';
            break;
        case (percentage >= 70):
            gscore = 'C';
            break;
        case (percentage >= 60):
            gscore = 'D';
            break;
        default:
            gscore = 'F';
    }
    return gscore;
}

const grade = myGrading(score);
console.log(`Тоглоом дууслаа Таны оноо: ${score} / ${questions.length} (${grade})`);


  }
}
askQuestion();


