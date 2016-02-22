let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// Resulting set: {2, 4, 6}

