export class Animal {
  constructor(name) {
    this.name = name;
    this.color = "brown";
  }
  get color() { 
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
  toString() {
    return console.log(`I am a ${this.name}.  I am ${this.color} in color.`);
  }
  static echo(input) {
    console.log(input);
  }
}
