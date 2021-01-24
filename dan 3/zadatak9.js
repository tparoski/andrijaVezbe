// Napraviti dva niza, $a i $b sa proizvoljnim brojem elemenata tipa string.
// U slučaju da je broj elementa u nizu $a veći od broja elemeneta u nizu $b,
// ispisati sve elemenete niza $a. U suprotnom, ispisati elemente niza $b

const colors = ["red","green","white","brown","yellow","pink"];
const animals = ["dog","cat","duck","mouse","cow","horse","pig","turkey","snake","bunny"];

if(colors.length>animals.length){
    console.log(colors);
} else {
    console.log(animals);
}