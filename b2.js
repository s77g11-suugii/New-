//const average = array => array.reduce((a,b)=>a+b)/array.length;
//console.log(average([10,20,30,40,50]));

const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let average = sum / numbers.length;
console.log(average);