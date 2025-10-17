//const a1 = [5, 10, 15];
//const a2 = [...a1];
//console.log(a2);

const numbers = [5, 10, 15];
const copy = [];
for (let i = 0; i < numbers.length; i++) {
  copy[i] = numbers[i];
}
console.log(copy);