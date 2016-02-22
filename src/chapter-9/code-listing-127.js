export class Animal {
  constructor(name) {
    this.name = name;
  }
  greeting(sound) {
    return `A ${this.name} ${sound}`;
  }
  static echo(input) {
    console.log(input);
  }	
}
