function foo() {
  return "firstname";
}
let obj = {
    foo: "bar",
    [ "prop_" + foo() ]: 42
}
console.log(JSON.stringify(obj));