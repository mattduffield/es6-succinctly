let obj = {}, name = "matt", desc = "here we go";
try {
  Object.defineProperty(obj, name, desc);
  // worked.
} catch (e) {
  // error.
}

if (Reflect.defineProperty(obj, name, desc)) {
  // worked
} else {
  // error.
}
	
