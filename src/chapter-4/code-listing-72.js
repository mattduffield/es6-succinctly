let evens = [2, 4, 6, 8, 10];
let odds = evens.map(v => v + 1);
let nums = evens.map((v, i) => v + i);

console.log(odds);
console.log(nums);
