// Napraviti dva niza, $a i $b sa proizvoljnim brojem elemenata tipa integer. 
// Napraviti treći niz $c koji sadrži presek ova dva niza (elementi koji se nalaze u oba niza). 
// Koristiti for petlju

let brojeviJedan = [1,2,3,4,5];
let brojeviDva = [4,5,6,7,8,9,10];

let noviNiz=[]

for(i=1;i<brojeviJedan.length;i++){
   if(brojeviDva.includes(brojeviJedan[i])){
       noviNiz.push(brojeviJedan[i]);
   }
}
console.log(noviNiz);