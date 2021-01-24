// Napisati PHP skriptu koja proverava da li je data godina prestupna.

var year = new Date().getFullYear();

if (year % 400 === 0) {
   console.log("This is a leap year");
} else if (year % 100 !== 0 && year % 4 === 0) {
    console.log("This is a leap year");
} else {
    console.log("This is not a leap year");
}