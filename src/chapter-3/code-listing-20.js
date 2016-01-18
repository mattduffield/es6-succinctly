function createDog(name, ability) {
  return { type: "animal", name, ability };
}
let a = createDog("wolf", "bark");
console.log(JSON.stringify(a));