fetch(url)
  .then(request => request.arrayBuffer())
  .then(arrayBuffer => /* process buffer */);

