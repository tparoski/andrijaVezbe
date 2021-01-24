// Napisati PHP skriptu koja na osnovu vrednosti promenijive $brojBodova ispisuje konaénu
// ocenu. Postaviti da je broj bodova proizvoljan broj od 0 do 100. Ocena se odreduje na sledeci
// nacin:
// Manje od 55 poena, ocena 5
// Od 55 do 64 poena, ocena 6
// Od 65 do 74 poena, ocena 7
// Od 75 do 84 poena, ocena 8
// Od 85 do 94 poena, ocena 9
// 95 i viSe poena, ocena 10

let brojBodova = Math.floor(Math.random() * 100) + 1;

if (brojBodova < 55 ) {
    console.log("Ocena 5, a ukupan broj poena je " + brojBodova);
} else if (brojBodova < 65) {
    console.log("Ocena 6, a ukupan broj poena je " + brojBodova);
} else if (brojBodova < 75) {
    console.log("Ocena 7, a ukupan broj poena je " + brojBodova);
} else if (brojBodova < 85) {
    console.log("Ocena 8, a ukupan broj poena je " + brojBodova);
} else if (brojBodova < 95) {
    console.log("Ocena 9, a ukupan broj poena je " + brojBodova);
} else {
    console.log("Ocena 10, a ukupan broj poena je " + brojBodova);
}