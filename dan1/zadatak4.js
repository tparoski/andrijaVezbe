// Napisati PHP skriptu koja kreira promenljive $a i $b i dodeljuje im vrednosti 5 i '5' respektivno.
// Ispitati da li su ove promenljive jednake i ispisati rezultat

let a = 5;
let b = "5";

console.log('Vrednosti nece biti iste ako uporedjujem tip i vrednost ' + (a===b));
console.log('Vrednosti ce biti iste ako uporedjujem vrednost a tip konvertujem ' + (a==b));
