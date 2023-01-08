"use strict"
let burgerButton = document.querySelector("#burger");
let navigationNav = document.querySelector(".nav");

burgerButton.addEventListener("click",function(){
navigationNav.classList.toggle("none");
});