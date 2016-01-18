import {Animal} from './code-listing-126';

export class AnimalClient {
  constructor() {
    this.animal = new Animal("Dog");
    console.log(this.animal.greeting("barks"));
  }
}

let ac = new AnimalClient();
Animal.echo("roof, roof");
