"use strict"

// Her er de to variabler som tager fat i de to knappers id fra HTML
const nightColorBtn = document.getElementById("nightColorBtn");
const lightColorBtn = document.getElementById("lightColorBtn");
const pinkColorBtn = document.getElementById("pinkColorBtn")

// Her er den variabel som tager fat i HTML'ens body
const body = document.body;


// Her er knap variablen lavet interaktiv - når man klikker på knap variablen så starter js og ændrer i body variablen
nightColorBtn.addEventListener("click", () => {
    body.style = "background: #121212";
})


// () => er en arrow function
lightColorBtn.addEventListener("click", () => {
   body.style = "background: #FFFFFF"; 
})

pinkColorBtn.addEventListener("click", () => {
   body.style = "background: #FC94AF"; 
})
