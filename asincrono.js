/**
 * @param {string} input
 */


function facciamoCose(input){
    console.log("abbiamo fatto "+input);
}

function facciamoCosaDefault(){
    console.log("Default");
}

facciamoCose("Stringa");
setTimeout(facciamoCosaDefault,1000);
facciamoCose("Stringa1");
setTimeout(facciamoCose,2000);
facciamoCose("Stringa2");
//setTimeout(facciamoCose("tre secondi"),3000) non si può fare
setTimeout(() => facciamoCose("Quattro secondi"),4000)
facciamoCose("Stringa3");