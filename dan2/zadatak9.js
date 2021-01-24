// Napisati PHP skriptu koja za dati celi broj (integer) ispisuje poruku da li je broj jednocifren,
// dvocifren, ili trocifren.

let number = Math.floor(Math.random() * ((999-1)+1) + 1);

if (number<10){
    console.log("Ovo je jednocifren broj " + number);
} else if (number<100) {
    console.log("Ovo je dvocifren broj " + number);
} else if (number<1000) {
    console.log("Ovo je trocifren broj " + number);
} else {
    console.log("Ovo je greska " + number);
}