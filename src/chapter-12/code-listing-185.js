let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
for (let x of unique) {
  console.log(x);
}

