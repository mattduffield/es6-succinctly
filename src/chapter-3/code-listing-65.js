let xhr = new XMLHttpRequest();
xhr.open('GET', someUrl);
xhr.responseType = 'arraybuffer';
  
xhr.onload = function () {
  let arrayBuffer = xhr.response;
  // process the buffer...
};
  
xhr.send();

