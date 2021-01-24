// Napisati PHP skriptu koja za date tri promenljive $a, $b i $c koje sadrze brojeve redom ispisuje
// brojeve od najmanjeg ka najveéem koristedi if/else.

var a=  Math.floor(Math.random() * ((999-1)+1) + 1);
var b=  Math.floor(Math.random() * ((999-1)+1) + 1);
var c=  Math.floor(Math.random() * ((999-1)+1) + 1);

console.log("Promenjive su " + a,b,c);


if(a < b && b < c) {
    console.log(a, b , c);
  } else if (a < b && c < b) {
    console.log(a, c, b);
  } else if (b < a && a < c) {
    console.log(b, a, c);
  } else if(b < a && c < a) {
    console.log(b, c, a); 
  } else if(c < a && a < b) {
    console.log(c, a, b);
  } else {
    console.log(c, b , a);
  }