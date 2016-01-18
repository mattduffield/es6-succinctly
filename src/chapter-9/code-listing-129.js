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
export class Canine extends Animal {
  constructor() {
    super("canine");
  }
  static echo() {
    super.echo("bow wow");
  }
}
