// Napisati PHP skriptu koja na osnovu vrednosti promenijive $n, koja sadrzi broj, ispisuje “$n je
// neparan broj” ako je broj neparan, u suprotnom “$n je paran broj’.

let n =  Math.floor(Math.random() * 100) + 1;

if(n % 2 == 0) {
    console.log(`The number ${n} is even.`);
} else {
    console.log(`The number ${n} is odd.`);
}