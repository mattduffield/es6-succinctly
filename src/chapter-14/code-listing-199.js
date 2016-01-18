var p = new Promise(function(resolve, reject) {  
  setTimeout(() => {throw new Error("Error encountered!");}, 2000);
});

p.then((res) => console.log("Response:", res))
  .catch((err) => console.log("Error:", err));
	
