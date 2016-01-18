function* sampleFunc() {
  console.log('First');
  yield;
  console.log('Second'); 
}

let gen = sampleFunc();
console.log(gen.next());
console.log(gen.next());
