//1. Napisati program koji ispituje da li je proizvod dve proizvoljne promenljive tipa number
// veći od njihovog zbira i rezultat ispisati na ekranu
console.log("Zadatak 1");
let a = Math.floor(Math.random() * 100) + 1;
let b = Math.floor(Math.random() * 100) + 1;

if(a*b>a+b){
    console.log(`Proizvod dva (${a},${b}) broja je veci od njihovog zbira i iznosi ${a*b}`);
} else {
    console.log(`Proizvod dva (${a},${b})broja je manji od njihovog zbira i iznosi ${a+b}`);
}

// 2) Napisati program koji ispituje da li je proizvoljan broj paran ili neparan i 
// rezultat ispisati na ekranu.
console.log("Zadatak 2");

if(a%2==0){
    console.log(`Broj ${a} je paran`);
} else {
    console.log(`Broj ${a} je neparan`);
}
// 3) Napraviti dve promenljive promenljive i dodeliti im prozivoljne vrednosti.
// Ukoliko su obe promenljive tipa “number”, ispisati poruku 
// “Promenljive su tipa number”, 
// u suprotnom ispisati “Barem jedna promenljiva nije tipa number”. 
console.log("Zadatak 3");

if(typeof(a && b) === 'number') {
    console.log("Promenljive su tipa number");
  } else {
    console.log('Barem jedna promenljiva nije tipa number');
  }

  //4) Napisati program koji sabira prvih 10 dvocifrenih brojeva
  let zbirBrojeva = 0;

  for(i=10;i<=20;i++){
    zbirBrojeva+=i;
  }
  console.log("Zadatak 4");
  console.log(`Zbir brojeva je `+ zbirBrojeva);

  //5) Napisati program koji racuna zbir prvih 20 neparnih brojeva

var counter = 0;
var sum=0;

for(i=0;counter<20;i++){
    if(i%2!==0){
        sum+=i;
        counter++;
    }
}

console.log("Zadatak 5");
console.log(`Zbir brojeva je `+ sum);

// 6) Napraviti promenljive a i b, koje sadrže proizvoljne brojeve, 
// i promenljivu operacija koja sadrzi string sa nazivom operacije 
// (moze da bude ‘saberi’, ‘oduzmi’, ‘pomnozi’, ‘podeli’). 
// Ispisati rezultat operacije čiji naziv je sadržan u promenljivoj operacija 
// sa vrednostima a i b. Npr. ako je vrednost promenljive operacija ‘saberi’, 
// ispisati rezultat a + b

let operacija = 'saberi';
console.log("Zadatak 6");
switch (operacija) {
    
    case 'saberi':
    console.log(`zbir je ${a+b}`);
    break;

    case 'oduzmi':
        console.log(`razlika je ${a-b}`);
        break;

    case 'pomnozi':
        console.log(`proizvod je ${a*b}`);
        break;  
        
    case 'podeli':
        console.log(`kolicnik je ${a/b}`);
        break;  
    default:
        console.log("Something went wrong"); 
}

// 7) Napraviti dva niza, m i n, sa proizvoljnim brojem elemenata. 
// Ako je broj elemenata u nizu m veći od broja elemeneta u nizu n, 
// ispisati sve elemenete niza m. U suprotnom, ispisati elemente niza n

var m= [8, 3,4,1];
var n=["samoJa"];

console.log("Zadatak 7");

if(m.length>n.length){
    console.log(m);
} else {
    console.log(n);
}

//8) Ispisati elemente proizvoljnog niza brojeva, uvećane za 1.
console.log("Zadatak 8");
for (let i=0;i<m.length;i++){
    console.log(m[i]+1)
}
//9) Ispisati elemente proizvoljnog niza brojeva, unazad.
console.log("Zadatak 9");
for(let i=m.length-1;i>=0;i--){
    console.log(m[i]);
}

//10) Ispisati svaki drugi element proizvoljnog niza.
console.log("Zadatak 10");
for (let i=0;i<m.length;i+=2){
    console.log(m[i]);
}

//11) Sabrati sve elemente proizvoljnog niza brojeva i ispisati zbir na kraju.

let zbir =0;
m.forEach(element => {
   zbir+=element 
});
console.log("Zadatak 11");
console.log(zbir);



let broj = 0;

function countingVowels(string){
    let vowels = ["a","e","i","o","u"];
   
    for(let i=0; i <= string.length; i++){
      if (string.includes(vowels[i])){
        broj ++;
      }
    }
     return broj;
  }

let counterr = 0;
function vowelsInString(sentence) {
    let samoglasnici = ['a','e','i','o','u'];
   
    for (let i=0; i<=sentence.length; i++){
        if (samoglasnici.includes(sentence[i]) ) {
            counterr++;
        }
    }
    return counterr;
}

  console.log("kacin adatak");
  console.log(countingVowels("mama"));
  console.log("tamatin zadatak");
  console.log(vowelsInString("mama"));
