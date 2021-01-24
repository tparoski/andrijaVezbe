// Napisati PHP skriptu koja za date tri promenijive, $a, $b i $c, koje sadrZe razlicite brojeve,
// ispisuje koja promenijiva sadrzi najveci broj, a koja promenijiva najmanii.


var a=  Math.floor(Math.random() * ((999-1)+1) + 1);
var b=  Math.floor(Math.random() * ((999-1)+1) + 1);
var c=  Math.floor(Math.random() * ((999-1)+1) + 1);

console.log("Promenjive su " + a,b,c);
//Najlaksi nacin
/*console.log("Najveca promenjiva je" + Math.max(a,b,c));
console.log("Najmanja promenjiva je " + Math.min(a,b,c)); */

//Cudan nacin
var numbers = [a,b,c]
var greatest =numbers[0];
var lowest =numbers[0];

for(i=0; i<=numbers.length; i++){
    if(greatest<numbers[i]){
        greatest=numbers[i];
    }
    if(lowest>numbers[i]){
        lowest=numbers[i];
    }
    }
    console.log("Najveci broj je " + greatest);
    console.log("Najmanji broj je " + lowest);