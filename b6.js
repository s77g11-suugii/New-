//function double(value) {
  
        //return value.map(function(element) {
            //return element * 2;
        //});
 
//}
//console.log(double([1, 3, 5, 7]));

const numbers = [1, 3, 5, 7];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled);