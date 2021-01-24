// Napisati PHP skriptu koja ispisuje koji je godiSnji kvartal u zavisnosti koji je mesec u godini.
// Koristiti iffelse. Redni broj meseca u godini se moZe dobiti pomoéu date("n").

var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0');


if (mm < 4){
    console.log("Sada je prvi kvartal");
}else if (mm<7) {
    console.log("Sada je drugi kvartal");
}else if (mm<10) {
    console.log("Sada je treci kvartal");
} else {
    console.log("Sada je cetvrti kvartal");
}