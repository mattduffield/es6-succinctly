var str = 'If you can dream it, you can do it.';
console.log(str.includes('If you can'));       // true
console.log(str.includes('it.'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('If you can', 1));    // false
console.log(str.includes('IF YOU'));       // false