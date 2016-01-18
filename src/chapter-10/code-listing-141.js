let someString = "hi";
var iterator = someString[Symbol.iterator]();
console.log(iterator + "");
 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
