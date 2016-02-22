function f(x, ...y) {
	console.log(y);
  // y is an Array
  return x * y.length;
}
console.log(f(3, 'hello', true) === 6);
