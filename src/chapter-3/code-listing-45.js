var string = 'A\uD835\uDC68';
var strIter = string[Symbol.iterator]();
console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"