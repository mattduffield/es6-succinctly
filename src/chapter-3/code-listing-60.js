var buffer = new ArrayBuffer(8);

var view = new DataView(buffer);
view.setInt8(0, 3);

console.log(view.getInt8(0));

