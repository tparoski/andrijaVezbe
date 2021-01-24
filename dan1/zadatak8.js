// Napisati PHP skriptu koja kreira promenijive $a, $b, $c i $d i dodeljuje im vrednosti 5, 10, 7, 12
// respektivno. Kreirati i promenljivu $f i u sluéaju da je $a vece od $c dodeliti joj zbir $b i $d, a u
// suprotnom razliku $b i $d. Iskoristiti kondicionalni operator za ovo. Ispisati rezultat

let a = 5;
let b = 10;
let c = 7;
let d = 12;

let f =  (a > c) ? (b+d) : (b-d);

console.log ("Vrednost promenjive f je " + f);