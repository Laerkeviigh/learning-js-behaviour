"use strict";

const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");

getZoomBtn.addEventListener("click", function() {

    if (this.textContent == "Zoom ind") {
        getWordElem.style.fontSize = "5rem";               // ny størrelse
        getWordElem.style.fontFamily = "'Courier New', monospace"; // ny skrifttype
        getWordElem.style.color = "pink";              // ny farve
        this.textContent = "Zoom ud";
    } else {
        getWordElem.style.fontSize = "3rem";              // tilbage til standard
        getWordElem.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"; // tilbage til standard
        getWordElem.style.color = "darkcyan";            // tilbage til standard
        this.textContent = "Zoom ind";
    }
});
