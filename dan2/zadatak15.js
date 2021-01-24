// Napisati PHP skriptu koja sabira prvih 20 neparnih prirodnih brojeva. Ispisati rezultat

// var i;
// var neparniBrojevi=0;
// var sum =0;

// for (i = 0; neparniBrojevi < 20; i++) {
//     if(i%2!=0){
//         sum+=i;
//         neparniBrojevi++;
//     }
// }

// console.log(sum);
var neparniBrojevi = [];
for (i =0; neparniBrojevi.length <= 20; i++){
    if (i%2 != 0) neparniBrojevi.push(i);
}
var sum = neparniBrojevi.reduce((a,b) => a +b);
console.log(sum)