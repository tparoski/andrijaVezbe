var array = [1,2,3,4,5,6,7,8]
var array2 = [9,210,11]
var array3=[];


function spojNesto(niz,niz2){
    niz3=[];
    for(let i=0;i<niz.length;i++){
        niz3.push(niz[i])
    }
    for(let i=0;i<niz2.length;i++){
        niz3.push(niz2[i])
    }
    return niz3;
}




function veciManji(niz){
    niz.forEach(element => {
        element>5 ? console.log(element +' je veci'): console.log(element +' je manji')
    })
}

//andrijino resenje
function andrijinoDodavanje(niz){
    niz.forEach(element => {
        array3.push(element);
    })
}

function nizovi(array, array2){
    andrijinoDodavanje(array);
    andrijinoDodavanje(array2);
}


veciManji(array)

function veci(niz){
    niz.forEach(element => {
        if(element<4){
            console.log(element + " je veci od 4")
        }
    })
}

veci(array);
console.log("niz 3");
console.log(spojNesto(array,array2));

