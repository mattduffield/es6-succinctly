function SuperCtor(arg1) {
  //...
}
function SubCtor(arg1, arg2) { 
  SuperCtor.call(this, arg1);
}
SubCtor.prototype = Object.create(SuperCtor.prototype);
