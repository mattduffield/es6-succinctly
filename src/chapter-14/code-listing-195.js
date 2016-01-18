var p = new Promise(function(resolve, reject) {  
  setTimeout(() => reject("Timed out!"), 2000);
});

p.then((res) => console.log(res),
	(err) => console.log(err));

