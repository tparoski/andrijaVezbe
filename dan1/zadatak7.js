
// Napisati PHP skriptu koja kreira promenljive $a, $b, $c i $d i dodeljuje im vrednosti 5, 10, 7, 12
// respektivno. Kreirati i promentljivu $f i u sluéaju da je $c veée od $a dodeliti joj vrednost $b, a u
// suprotnom vrednost $d. Iskoristiti kondicionalni operator za ovo. Ispisati rezultat

let a = 5;
let b = 10;
let c = 7;
let d = 12;

let f =  (c > a) ? b : d;

console.log ("Vrednost promenjive f je " + f);
