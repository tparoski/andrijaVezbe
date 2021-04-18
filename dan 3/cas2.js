//1.Create a function that takes an array of numbers and return both the minimum and maximum numbers, 
//in that order.

var array1 = [1, 2, 3, 4, 5, 0, -4, 6];
var minimum1 = array1[0];
var maximum1 = array1[0];

function minMax1(niz) {
    niz.forEach(element => {
        if (element > maximum1) {
            maximum1 = element;
        } else if (element < minimum1) {
            minimum1 = element;
        }
    })
}

//1.Ponovo prvi

var minimum2 = array1[0];
var maximum2 = array1[0];
var array2 = [];

function minMax2(niz) {

    niz.forEach(element => {
        element = (element > maximum2) ? maximum2 = element : minimum2 = element;
    })
    array2.push(minimum2, maximum2);
    return array2
}

//2. Create a function that takes two arrays and insert the second array in the middle of the first array.
var array3 = ["nista", true, 66, "sova"];

function newArray(array1, array3) {
    var middle = Math.floor(array1.length / 2);
    for (let i = 0; i < array3.length; i++) {
        array1.splice(middle + i, 0, array3[i])
    }
    return array1;
}

//Create a function to return the amount of potatoes there are in a string. 

var potatoMaybe = "potatoapplepotatoorgangepotato";
var potato = "potato";

function potatoCount(recenica, rec) {
    var duzina = recenica.split(rec).length - 1;
    console.log(`U recenici ${recenica} ima ${duzina} ${rec}-a`);
}
function potatoCount2(recenica) {
    recenica = recenica.toLowerCase();
    var counter = 0;
    for (let i = 0; i < recenica.length; i++) {
        if (recenica[i] === "p" && recenica[i + 1] === "o" && recenica[i + 2] === "t" && recenica[i + 3] === "a" && recenica[i + 4] === "t" && recenica[i + 5] === "o") {
            counter++;
        }
    }
    console.log(`U recenici ${recenica} ima ${counter} krompira`);
}


//Given a number, return an array containing the two halves of the number. 
//If the number is odd, make the rightmost number higher. (numberSplit(11) ➞ [5, 6])
var broj = 9;

function polovine(number) {
    var niz = [];
    var polovina = Math.floor(number / 2);

    polovina = (number % 2 === 0) ? niz.push(polovina, polovina) : niz.push(polovina, polovina + 1);


    return niz;
}

//In this challenge you will be given a relation between two numbers, written as a string. 
//Write a function that determines if the relation is true or false.
var no1 = 10;
var no2 = 3;
var odnos = "<=";

function checkRelation(string, broj1, broj2) {

    switch (string) {
        case ">":
            return broj1 > broj2
        case "<":
            return broj1 < broj2
        case "=":
            return broj1 == broj2
        case ">=":
            return broj1 >= broj2
        case "<=":
            return broj1 <= broj2
        default:
            break;
    }
}

//Fruit salads are served best when the fruits are sliced and diced into small chunks!
var voce= ["jabuka","kruska","jagoda","banana","kivi"];
function FruitSalad(voce){
    var salata=[];

    voce.forEach(element =>{
        var sec = Math.floor(element.length / 2);
        salata.push(element.slice(0,sec),element.slice(sec));
    })
    return salata;
}

//Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. 
//The paper starts off with a thickness of 0.5mm.
//numLayers(1) ➞ "0.001m"
//Paper folded once is 1mm (equal to 0.001m)
var puta=3;
function thickness(foldNo){
    
var paper=1;
for(let i=1; i<=foldNo;i++){
    paper=paper*2;
}
return paper
}

//pozivanje
minMax1(array1);
console.log(`Resenja prvog zadatka: Maximum je ${maximum1}, minimum je ${minimum1}`);
console.log("Ponovo resenja prvog zadatka " +minMax2(array1));
console.log(" Treci zadatak resenja su "+newArray(array1, array3));
potatoCount(potatoMaybe, potato);
potatoCount2(potatoMaybe);
console.log(`Polovine broja ${broj} su ` +polovine(9));
console.log(`Recenica ${no1} ${odnos} ${no2} je ` + checkRelation(odnos, no1, no2));
console.log(`Od vocne salate ${voce}, napravicemo salaticu! Sec, sec, sec`)
console.log(FruitSalad(voce));
console.log(`Ukoliko papir debljine 0.0005 pesavijemo ${puta} puta, njegova debljina ce biti: ${thickness(puta)} metra`);
