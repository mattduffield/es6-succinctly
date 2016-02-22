import {Animal} from './code-listing-131';

export class AnimalClient {
  constructor() {
    this.animal = new Animal("dog");
    this.animal.toString();
  }
}

let ac = new AnimalClient();
