var obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

function myAssign(target, ...sources) {
  sources.forEach(source => {
    Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {}));
  });
  return target;
}

var copy = myAssign({}, obj);
console.log(copy);