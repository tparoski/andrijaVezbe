// Napisati PHP skriptu koja za date tri promenijive $a, $b, $c koje sadrze brojeve ispisuje
// srednju vrednost.

let a = 5;
let b = 10;
let c = 12;

let addValues = [a , b, c];
let numberOfVeribales= addValues.length;
let sum = addValues.reduce((a,b)=> a+b);

console.log ("prosecna vrednost je " + (sum/numberOfVeribales));
