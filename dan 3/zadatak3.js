// https://prnt.sc/xk8tb1
var cities= [   {county:"Italy", city:"Rome"},
                {county:"Luxembourg", city:"Luxembourg"},
                {county:"Belgium", city:"Brussels"},
                {county:"Denmark", city:"Copenhagen"},
                {county:"Finland", city:"Helsinki"} ];


cities.forEach(function(element){
                    console.log("The capital of " + element.county + " is " + element.city);
                });