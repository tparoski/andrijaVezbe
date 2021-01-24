// Napisati PHP skriptu koja za date tri promenijive $a, $b, $c koje sadrze brojeve, raéuna
// srednju vrednost i deli je sa brojem 7. Ispisati rezultat

let a = Math.floor(Math.random() * 100) + 1;
let b = Math.floor(Math.random() * 100) + 1;
let c = Math.floor(Math.random() * 100) + 1;

let addValues = [a , b, c];
let numberOfVeribales= addValues.length;
let sum = addValues.reduce((a,b)=> a+b);
let avarage= sum/numberOfVeribales;

console.log (`prosecna vrednost ${a},${b},${c} je ${avarage}, a podeljeno sa 7 je ${avarage/7}`);