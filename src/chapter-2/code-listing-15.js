const TOKEN = /\s*(\+|[0-9]+)\s*/y;

function tokenize(TOKEN_REGEX, str) {
  let result = [];
  let match;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}
    
let result = tokenize(TOKEN, '3 + 4');
console.log(JSON.stringify(result));