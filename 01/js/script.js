"use strict";

// Tag fat om websides body - ordet websiteBody er et selvvalgt navn til en variabel, så den kan selv bestemmes
const websiteBody = document.body;


// Lav hele websidens body en farve
websiteBody.style = "background: pink";


// Her er en måde at lave en funktion på
function greetings(){
    console.log ("Hej med dig");
}

greetings();


// Her er en måde at lave en funktion der kan lægge to tal sammen
function addNumbers(tal1,tal2){
    const sum = tal1 + tal2;
    return sum;
}

const result = addNumbers(50,20);
console.log (result);
