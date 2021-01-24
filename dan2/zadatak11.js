// Napisati PHP skriptu koja ispisuje prvih 10 neparnih prirodnih brojeva koristeci while petlju.
//var i = 0;
// var neparniBroj =0;

// while(neparniBroj<10){
//     i++;
//     if(i%2!=0){
//         console.log(i);
//         neparniBroj++;
//     }
// }
// Nacin 2
var i = 0;
var neparniBrojevi = [];
while(neparniBrojevi.length < 10){
        if(i%2 != 0){
        neparniBrojevi.push(i);
    }
    i++;
}
console.log(neparniBrojevi);