let credentials = "private-user=admin&private-pw=p@$$w0rd";
let a = "one";
let b = "two";
let url = `http://myapp.com/login?a=${a}&b=${b}
   Content-Type: application/json
   X-Credentials: ${credentials}
`;
console.log(url);
let post = `POST ${url}`;
