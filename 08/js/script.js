"use strict";


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("bounce");
//     setTimeout(()=>this.classList.remove("bounce"),600);
// });


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("shake");
//     setTimeout(()=>this.classList.remove("shake"),400);
// });


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("spin");
//     setTimeout(()=>this.classList.remove("spin"),600);
// });

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {
    this.classList.add("fade");
    setTimeout(()=>this.classList.remove("fade"),1000);
});


// Pulse 
getWordElem.addEventListener("click", function() {
    this.classList.add("pulse");
    setTimeout(() => this.classList.remove("pulse"), 600);
});

// RotateY 
getWordElem.addEventListener("dblclick", function() { // dobbeltklik for at aktivere
    this.classList.add("rotateY");
    setTimeout(() => this.classList.remove("rotateY"), 800);
});