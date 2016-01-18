function delay(ms) {  
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

Promise.race([  
  delay(3000).then(() => "I finished second."),
  delay(2000).then(() => "I finished first.")
])
.then(function(txt) {
   console.log(txt);  
})
.catch(function(err) {
  console.log("error:", err);
});
	
