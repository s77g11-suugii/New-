//const sampleArr = [1, 2, 3, 2, 4, 3, 5];
//const counts = {};
//sampleArr.forEach(num => {
//    counts[num] = counts[num] ? counts[num] + 1 : 1;
//});
//console.log(counts);

const numbers = [1, 2, 3, 2, 4, 3, 5];
const counts = {};
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  counts[num] = (counts[num] || 0) + 1;
}
for (let num in counts) {
  if (counts[num] === 2) {
    console.log(num + ": " + counts[num]);
  }
}