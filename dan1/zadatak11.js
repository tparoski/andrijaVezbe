// Napisati PHP skriptu koja kreira promenljive $a, $b i $c i dodeljuje im vrednosti 5, 10, false
// respektivno. Kreirati i promenljivu $d iu sluéaju da je $c “taéno”, dodeliti joj vrednost $a, a u
// suprotnom vrednost $b. Iskoristiti kondicionalni operator za ovo. Ispisati rezultat

let a = 5;
let b = 10;
let c = false;

let d =  (c===true) ? a : b;

console.log ("Vrednost promenjive d je " + d);