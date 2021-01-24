// Napisati PHP skriptu koja kreira numerički niz koji predstavlja mesece u godini i 
// pomoću foreach petlje ispisati sve elemente niza.

// let startDate = new Date('2020-01-01');
// let startDate1=startDate.getMonth()+1;
// let endDate= new Date('2020-12-01');
// let endDate1=endDate.getMonth()+1;
// console.log(startDate1);
// console.log(endDate1);

// let months= [];


// for(i=startDate1; i<=endDate1;i++){
//     months.push(i);
// }

// months.forEach(function(months){
//     console.log(months);
// });
let startDate = new Date('2020-01-01');
let endDate= new Date('2020-12-31');
var months = [];
for (startDate.getMonth(); startDate < endDate; startDate.setMonth(startDate.getMonth() + 1)){
    months.push(startDate.getMonth() + 1);
}
months.forEach(month => console.log(month));