// Napisati PHP skriptu koja za date dve promenljive $a i $b koje sadrze brojeve ispisuje
// apsolutnu vrednost razlike

let a = Math.floor(Math.random() * 100) + 1;
let b = Math.floor(Math.random() * 100) + 1;

let result= Math.abs(a-b);

console.log(`Aposlutna vrednost razlike broja ${a} i broja ${b} je ${result}`);