// 1. Write a JavaScript function to check whether an `input` is an array or not.

const { format } = require("path");

function is_array(input) {
    return Array.isArray(input);
}

// 2. Write a simple JavaScript program to join all elements of the following array into a string. 
myColor = ["Red", "Green", "White", "Black"];

function spojBoje(boja) {
    var string = "";

    boja.forEach(element => {

        string = string != "" ? string + "," + element : string + element;
    });
    return string;
}

function spojBoje2(boja) {
    return boja.toString()
}
function spojBoje3(boja) {
    return boja.join("+");
}

// 3. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.

function dashes(boja) {
    boja1 = boja.toString();
    var string = "";

    for (let i = 0; i < boja1.length; i++) {
        string = boja1[i] % 2 == 0 && boja1[i + 1] % 2 == 0 ? string = string + boja1[i] + "-" : string = string + boja1[i];
    }

    return string;
}

// 4. Write a JavaScript program to sort the items of an array. 

function sortingArray(niz) {
    return niz.sort((a, b) => a - b);
}

// 5.Write a JavaScript program to find the most frequent item of an array. 
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
function mostFrequesnt(niz) {
    var noviNiz = [];

    for (let i = 0; i < niz.length; i++) {

        var exsistingelements = noviNiz.filter(element => {
            return element.name == niz[i]
        })

        if (exsistingelements.length > 0) {
            exsistingelements[0].count++
        } else {
            var noviObjekat = {
                name: niz[i],
                count: 1
            }
            noviNiz.push(noviObjekat);
        }

    }
    noviNiz.sort(((a, b) => b.count - a.count));
    console.log(`${noviNiz[0].name} se pojavio ${noviNiz[0].count} puta`);


}

// 6. Write a JavaScript program which prints the elements of the following array. 
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function printingArray(niz) {
    for (let i = 0; i < niz.length; i++) {
        console.log(`Row ${i}`);

        for (let y = 0; y < niz[i].length; y++) {
            console.log(niz[i][y]);
        }
    }
}


// 7. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). 

function removing(niz) {
    var noviNiz = [];
    niz.forEach(element => {
        var newOne = element.toUpperCase();
        noviNiz.push(newOne);
    })

    let removedDuplicates = noviNiz.filter((c, i) => {
        return noviNiz.indexOf(c) === i;
    });
    console.log(removedDuplicates);
}


// 8. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];


function sum2(niz1, niz2) {
    var niz3 = [];
    var nizVeci = [];
    var nizManji = [];

    nizManji = niz1.length < niz2.length ? niz1 : niz2;
    nizVeci = niz1.length >= niz2.length ? niz1 : niz2;

    for (let i = 0; i < nizVeci.length; i++) {
        nizManji[i] === undefined ? niz3.push(nizVeci[i]) : niz3.push(nizVeci[i] + nizManji[i])

    }
    return niz3;
}

// 9. Write a JavaScript program to compute the union of two arrays. Go to the editor
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// // [1, 2, 3, 10, 100]

function union(niz1, niz2) {
    var niz3 = niz1.concat(niz2);
 
    
}


console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(spojBoje(myColor));
console.log(spojBoje2(myColor));
console.log(spojBoje3(myColor));
console.log(dashes(1223400568));
console.log(sortingArray([3, 8, 7, 6, 5, -4, 3, 2, 1]));
mostFrequesnt([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
printingArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);
removing(["a", "b", "a", "c", "B", "C"]);
console.log(sum2(array1, array2));
union([1, 2, 3], [100, 2, 1, 10]);


