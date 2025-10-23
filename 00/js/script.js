"use strict";

/* Kommentar på flere linjer */
// Kommentar på enkelt linje


// Document refererer til HTML og .write skriver i HTML dokumentet
document.write("Hej med dig");


// Laver en pop up med en string "tekst"
alert("Det her er for sejt!!");


// Besked til mig selv inde i konsollen "undersøg"
console.log("Her er min besked i konsollen i min browser!");


// Variabler
// Const kan ikke ændres, let kan ændres. 
// Anføreselstegn om tekst, ingen anføreselstegn om tal.

const pi = 3.14159265;

// Pascal case - skal vi ikke bruge
let FirstName = "Lærke";

// Camel Case - det som vi skal bruge
let firstName = "Mathilde";

let lærkeAge = 21;
let mathildeAge = 22;

// Her lægger den automatik +1 på variablen
lærkeAge++; 
mathildeAge++;

// Hvis der skal lægges flere tal på variablen
lærkeAge +=4;


console.log(`Jeg hedder ${FirstName} og jeg er ${lærkeAge} år`);
console.log (`Jeg hedder ${firstName} og jeg er ${mathildeAge} år`);



