// Napraviti dva niza, $a i $b sa proizvoljnim brojem elemenata tipa integer. 
// Napraviti treći niz $c koji sadrži uniju ova dva niza 
// (svi elementi koji se nalaze u oba niza, bez ponavljanja elemenata). 
// Koristiti for petlju


let brojeviJedan = [1,2,3,4,5];
let brojeviDva = [4,5,6,7,8,9,10];

let noviNiz=[]

for(i=1;i<brojeviJedan.length;i++){
   if(!brojeviDva.includes(brojeviJedan[i])){
    brojeviDva.push(brojeviJedan[i]);
   }
}
console.log(brojeviDva);