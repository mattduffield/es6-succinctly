class GeneratorClass {
  * sampleFunc() {
    console.log('First');
    yield;
    console.log('Second'); 
  }
}
let gc = new GeneratorClass();
let gen = gc.sampleFunc();
console.log(gen.next());
console.log(gen.next());

