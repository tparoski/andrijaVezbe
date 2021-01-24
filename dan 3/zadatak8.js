//Napravi  dva niza, $a i $b sa po proizvoljnih 10 elemenata tipa string. 
//Napraviti asocijativni niz $c koji koristi elemente niza $a kao ključeve, 
//i elemente niza $b kao vrednosti

const colors = ["red","green","orange","blue","white","brown","yellow","pink","purple","black"];
const animals = ["dog","cat","duck","mouse","cow","horse","pig","turkey","snake","bunny"];
let array = [];

for(i=0;i<10;i++){
    var element = new Object();
    element[colors[i]] = animals[i];
    array.push(element);
}

console.log(array);
