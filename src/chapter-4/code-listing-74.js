let fives = [];
let nums = [1, 2, 5, 15, 25, 32];
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);
