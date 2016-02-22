var buffer = new ArrayBuffer(8);

// 32-bit View
var bigView = new Int32Array(buffer);
bigView[0] = 98;
bigView[1] = 128;

for(let value of bigView)
{
  console.log(value);
  // 98
  // 128
}

// 16-bit View
var mediumView = new Int16Array(buffer);

for(let value of mediumView)
{
  console.log(value);
  // 98
  // 0
  // 128
  // 0
}

// 8-bit View
var smallView = new Int8Array(buffer);

for(let value of smallView)
{
  console.log(value);
  // 98
  // 0
  // 0
  // 0
  // -128
  // 0
  // 0
  // 0
}

// 8-bit Unsigned View
var unsignedView = new Uint8Array(buffer);

for(let value of unsignedView)
{
  console.log(value);
  // 98
  // 0
  // 0
  // 0
  // 128
  // 0
  // 0
  // 0
}

