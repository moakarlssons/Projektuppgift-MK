"use strict"

// Hamburgemenyn

const headerNavBtn = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav");
if (headerNavBtn && headerNav) {
    headerNavBtn.addEventListener("click", function () {
        headerNav.classList.toggle("open");
    });
}



const regForm = document.getElementById("regForm");

if (regForm) {
    regForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Hämtar värden på alla input fält
        const name = document.getElementById("name").value.trim();
        const number = document.getElementById("number").value.trim();
        const email = document.getElementById("email").value.trim();
        const dogname = document.getElementById("dogname").value.trim();
        const breed = document.getElementById("breed").value.trim();
        const date = document.getElementById("date").value;
        const select = document.getElementById("select").value;

        //Rensa tidigare felmeddelanden
        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });

        let valid = true;

        // Kontrollera om alla textfält är ifyllda
        if (!name) showError("nameError", "Ange ditt namn");
        if (!number) showError("numberError", "Ange ditt telefonnummer.");
        if (!email) showError("emailError", "Ange din e-postadress.");
        if (!dogname) showError("dognameError", "Ange hundens namn.");
        if (!breed) showError("breedError", "Ange hundens ras");
        if (!date) showError("dateError", "Ange hundens födelsedatum");
        if (!select) showError("selectError", "Vänligen välj en kurs");

        // Skriver ut error vid fel
        function showError(field, message) {
            document.getElementById(field).textContent = message;
            valid = false;
        }
        // Nollställer formulälet om det inte finns några fel 
        if (valid) {
            regForm.reset();
        }
    });
}

