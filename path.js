const path = require('path');
 
let dir = "C:/Users/VINIKET/javascript/javascript practice";
let otherdir = "C:/Users/VINIKET/javascript/javascript telusko+ todo";
let file = "intro.txt";

console.log(path.dirname(dir + file));
console.log(path.extname(file));
console.log(path.join(dir, otherdir + file));