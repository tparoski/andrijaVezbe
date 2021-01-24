// Napraviti dva niza, $a i $b sa proizvoljnim brojem elemenata tipa integer. 
// Napraviti treći niz $c koji sadrži presek ova dva niza (elementi koji se nalaze u oba niza). 
// Koristiti ugrađenu php funkciju (pronaći odgovarajuću funkciju u dokumentaciji 
// na http://php.net/manual/en/ref.array.php)

let brojeviJedan = [1,2,3,4,5];
let brojeviDva = [4,5,6,7,8,9,10];

const intersectArray = brojeviJedan.filter(value => brojeviDva.includes(value));

console.log(intersectArray);
