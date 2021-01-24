
// Napraviti dva niza, $a i $b. Koristeći jednu for petlju, postaviti sve parne brojeve od 1 do 100 u niz $a, i sve neparne brojeve od 1 do 100 u niz $b. Ispisati sadržaj nizova
var a= [];
var b=[];

for (i = 0; i <= 100; i++) {
    if(i%2==0){
        a.push(i);
    } else {
        b.push(i);
    }
  }

  console.log("Vrednosti niza a su: " + a);
  console.log("Vrednosti niza b su: " + b);