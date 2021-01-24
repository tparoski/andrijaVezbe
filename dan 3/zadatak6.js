// https://prnt.sc/xk904c
//var meseci = [
//                 {mesec:" januar",dani:31},
//                 {mesec:" februar",dani:28},
//                 {mesec:" mart",dani:31},
//                 {mesec:" april",dani:30},
//                 {mesec:" maj",dani:31},
//                 {mesec:" jun",dani:30},
//                 {mesec:" jul",dani:31},
//                 {mesec:" avgust",dani:31},
//                 {mesec:" septembar",dani:30},
//                 {mesec:" oktobar",dani:31},
//                 {mesec:" novembar",dani:30},
//                 {mesec:" decembar",dani:31},
//              ];

//     meseci.forEach(element => {
//         for(i=1;i<=element.dani;i++){
//             console.log(i + element.mesec +" 2021")
//         }
        
//     });

    var meseci = [
        {januar:31},
        {februar:28},
        {mart:31},
        {april:30},
        {maj:31},
        {jun:30},
        {jul:31},
        {avgust:31},
        {septembar:30},
        {oktobar:31},
        {novembar:30},
        {decembar:31}
     ];

meseci.forEach((element) => {
    Object.keys(element).forEach(function(key) {
    
        for(i=1;i<=element[key];i++){
            console.log(i + key +" 2021")
        }
      });

});
