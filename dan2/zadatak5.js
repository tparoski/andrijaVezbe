// Napisati PHP skriptu koja za promenljive $a i $b, koje sadrze brojeve, ispisuje rezultat
// operacije koji je sadrZan u promenijivoj $operacija (moze da bude 'saberi’, 'oduzmi', '‘pomnozi',
// ‘podeli’). Koristiti switch.

let a = 5;
let b = 7;
let operacija = 'saberi';

switch (operacija) {
    
    case 'saberi':
    console.log(a+b);
    break;

    case 'oduzmi':
        console.log(a-b);
        break;

    case 'oduzmi':
        console.log(a-b);
        break;

    case 'pomnozi':
        console.log(a*b);
        break;  
        
    case 'podeli':
        console.log(a/b);
        break;  
}