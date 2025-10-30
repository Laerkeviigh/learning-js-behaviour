"use strict";

//Data struktur for vores OOUX-model repræsenteret med javascript. Objekter i tuborgklammerne, og den skarpe klamme indikerer at vi gerne vil have en array/liste. name, price og color er proporties og iPhone, tal og farve er values. Values inde i "" er strings.

const products = [
    {name: "iPhone17", price: 8999, color: "Black"},
    {name: "iPhone16", price: 7999, color: "Silver"},
    {name: "iPhone15", price: 6999, color: "Pink"},
    {name: "iPhone14", price: 5999, color: "Gold"},

];

//Variabler - henter DOM elementer 

const displayDataBtn = document.getElementById("displayData");
const resetDataBtn = document.getElementById("resetData");

//Event listeners - lytter efter et klik på knapperne
displayDataBtn.addEventListener("click", function(){
    let productDetails = "";

    //Loop der går igennem hvert produkt i "products" arrayet
    products.forEach( product =>{
        productDetails += `
            <div class = "generated-card">
                <p>Productname: ${product.name}</p>
                <p>Productprice: ${product.price}</p>
                <p>Productcolor: ${product.color}</p>
            </div>
        `
    });
    document.getElementById("container").innerHTML = productDetails;
});





