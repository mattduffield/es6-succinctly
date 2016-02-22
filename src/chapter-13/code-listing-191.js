Symbol("foo") !== Symbol("foo")
const foo = Symbol('test1');
const bar = Symbol('test2');
typeof foo === "symbol";
typeof bar === "symbol";
let obj = {};
obj[foo] = "foo";
obj[bar] = "bar";
console.log(JSON.stringify(obj));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

