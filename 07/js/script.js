"use strict";


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.innerHTML = "<strong>BILKA!</strong>"
// });


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {

//     if (this.textContent == "Hvem ka"){
//         this.innerHTML = "<strong>BILKA!</strong>";
//     }
//     else {
//         this.innerHTML = "Hvem ka";
//      }
// });


"use strict";

const getWordElem = document.getElementById("word");
getWordElem.addEventListener("click", function() {
    if (this.textContent == "Det ta'r kun 5 minutter") {
        this.innerHTML = "<strong>og så er du i Netto.</strong>";
    } else {
        this.innerHTML = "Det ta'r kun 5 minutter";
    }
});

// nike slogan
const getSlogan2 = document.getElementById("slogan2");
getSlogan2.addEventListener("click", function() {
    if (this.textContent == "Just Do It") {
        this.innerHTML = "<strong>Nike</strong>";
    } else {
        this.innerHTML = "Just Do It";
    }
});

// jysk slogan
const getSlogan3 = document.getElementById("slogan3");
getSlogan3.addEventListener("click", function() {
    if (this.textContent == "Et godt tilbud for alle, dag og nat") {
        this.innerHTML = "<strong>Jysk</strong>";
    } else {
        this.innerHTML = "Et godt tilbud for alle, dag og nat";
    }
});
