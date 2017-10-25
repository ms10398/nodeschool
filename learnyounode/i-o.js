var fs = require('fs');

var buffer =fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var words = string.split('\n');

console.log(words.length - 1);
