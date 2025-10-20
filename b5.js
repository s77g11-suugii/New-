//let numbers = [1, 2, 3, 4, 5, 6,];
//let even = [];
//numbers.forEach(element => {
//    if (element%2 == 0)
//        even.push(element);
//});
//console.log(even);

//for
//const numbers = [1, 2, 3, 4, 5, 6];
//let even = [];
//for (let i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 === 0) {
//    even.push(numbers[i]);
//  }
//}
//console.log(even);

//while
const numbers = [1, 2, 3, 4, 5, 6];
let even = [];
let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  }
  i++;
}
console.log(even);
