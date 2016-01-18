let canvas = document.getElementById('my_canvas');
let context = canvas.getContext('2d');
let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
let uint8ClampedArray = imageData.data;

