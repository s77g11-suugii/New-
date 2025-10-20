//let arr = [4, 9, 2, 7, 5];
//let maxVal = Math.max(...arr);
//console.log(maxVal);

//for
//const numbers = [4, 9, 2, 7, 5];
//let max = numbers[0]; 
//for (let i = 1; i < numbers.length; i++) {
//  if (numbers[i] > max) {
//    max = numbers[i];
//  }
//}
//console.log(max);

//while 
const numbers = [4, 9, 2, 7, 5];
let max = numbers[0];
let i = 1;
while (i < numbers.length) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    i++;
}
console.log(max);
