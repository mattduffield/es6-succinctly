import {Animal} from './code-listing-130';

export class AnimalClient {
  constructor() {
    this.animal = new Animal("dog");
    this.animal.toString();
  }
}

let ac = new AnimalClient();
