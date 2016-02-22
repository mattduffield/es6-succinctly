let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

for (let entry of map.entries()) {
  console.log(entry[0], entry[1]);
}

