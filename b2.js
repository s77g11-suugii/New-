//const average = array => array.reduce((a,b)=>a+b)/array.length;
//console.log(average([10,20,30,40,50]));

//for
//const numbers = [10, 20, 30, 40, 50];
//let sum = 0;
//for (let i = 0; i < numbers.length; i++) {
//  sum += numbers[i];
//}
//let average = sum / numbers.length;
//console.log(average);

//while
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
let average = sum / numbers.length;
console.log(average);
