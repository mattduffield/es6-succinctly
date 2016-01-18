var buffer = new ArrayBuffer(8);

var view = new DataView(buffer);
view.setInt32(0, 3);

console.log(view.getInt8(0));
console.log(view.getInt8(1));
console.log(view.getInt8(2));
console.log(view.getInt8(3));

console.log(view.getInt32(0));

