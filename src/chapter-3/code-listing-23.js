var prop = "foo";
var o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};
console.log(o.foo);
console.log(o.bar);