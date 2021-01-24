// Napraviti promenljivu $a sa vrednoSéu 5 i promenijivu $b sa vrednogéu 7. Ukoliko su obe
// promenijive tipa integer, ispisati poruku “Promenijive su tipa integer’, u suprotnom ispisati
// “Promenijive nisu tipa integer”. Koristiti iffelse. Tip promenljive se dobija pomocu funkcije
// gettype, npr. tip promenijive $a se dobija pomocu gettype($a)

let a= 5;
let b= 7;

if(typeof(a && b) === 'number') {
    console.log('Obe promenjive su tipa integer');
  } else {
    console.log('Obe promenjive nisu tipa integer');
  }
  