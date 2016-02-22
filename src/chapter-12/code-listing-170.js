let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

for (let [key, value] of map.entries()) {
  console.log(key, value);
}

