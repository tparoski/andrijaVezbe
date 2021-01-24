// Napraviti dva niza, $a i $b sa proizvoljnim brojem elemenata tipa string. 
// Uz pomoć for petlje dodati elemente niza $b u niz $a u obrnutom redosledu.

var colors = ["red","green","white","brown","yellow","pink"];
var animals = ["dog","cat","duck","mouse","cow","horse","pig","turkey","snake","bunny"];

colors =colors.concat(animals.reverse());
console.log(colors);