// Napraviti promenijivu $a sa vrednoséu 5 i promenijivu $b sa vrednoSéu 9. Promeljivu $b
// sabrati sa stringom “4”. Ukoliko su obe promenijive tipa integer, ispisati poruku “Promenijive
// su tipa integer’ i ispisati njihov zbir, u suprotnom ispisati “Promenijive nisu tipa integer”. Koristiti
// funkciju gettype i iffelse.

let a= 5;
let b= 7;

b+="4";


if(typeof(a && b) === 'number') {
    console.log('Obe promenjive su tipa integer ' + (a+b));
  } else {
    console.log('Obe promenjive nisu tipa integer');
  }