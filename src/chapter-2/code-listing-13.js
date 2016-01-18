var text = 'First line\nsecond line';
var regex = /^(\S+) line\n?/y;

var match = regex.exec(text);
console.log(match[1]);        // logs 'First'
console.log(regex.lastIndex); // logs '11'

var match2 = regex.exec(text);
console.log(match2[1]);       // logs 'Second'
console.log(regex.lastIndex); // logs '22'

var match3 = regex.exec(text);
console.log(match3 === null); // logs 'true'