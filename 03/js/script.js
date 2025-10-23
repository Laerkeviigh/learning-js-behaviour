"use strict"


const body = document.body;

// innerwidth på browser vinduet gemmes i variablen witdh
function updateBackground() {
const width = window.innerWidth;

    if (width < 480){
        body.style.background = "lavender";
    }
    else if (width < 760){
        body.style.background = "lightyellow";
    }
    else if (width < 960){
        body.style.background = "lightblue"; 
    }
    else if (width < 1024){
        body.style.background = "white"; 
    }
     else if (width < 1200){
        body.style.background = "pink"; 
    }
    else {
        body.style.background = "lightgray"; 
    }
}


// Kør ved load
updateBackground();


// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);


//480 ny farve
//760 ny farve
//960 ny farve
//1024 ny farve
//1200 ny farve