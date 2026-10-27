"use strict"

// Hamburgemenyn

const headerNavBtn = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav");
if (headerNavBtn && headerNav) {
    headerNavBtn.addEventListener("click", function () {
        headerNav.classList.toggle("open");
    });
}

// Validera formuläret från kurs sidan

const name = document.getElementById("name").value.trim();
const number = document.getElementById("number").value.trim();
const email = document.getElementById("email").value.trim();
const dogname = document.getElementById("dogname").value.trim();
const breed = document.getElementById("breed").value.trim();
const date = document.getElementById("date").value;

// Kontrollera om alla textfält är ifyllda

if (!name || !number || !email || !dogname || !breed || !date) {

    return;
}