"use strict"

const form = document.getElementById("regForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();


    // Hämta alla fälten
    const fields = [
        { id: "name", errorId: "nameError", message: "Fyll i ditt namn." },
        { id: "number", errorId: "numberError", message: "Fyll i ditt telefonnummer." },
        { id: "email", errorId: "emailError", message: "Fyll i din e-postadress." },
        { id: "dogname", errorId: "dognameError", message: "Fyll i hundens namn." },
        { id: "breed", erroeId: "breedError", message: "Fyll i hundens ras." },
        { id: "date", erroeId: "dateError", message: "Fyll i hundens födelsedatum." },
        { id: "select", erroeId: "selectError", message: "Välj en kurs." }
    ];

    let isValid = true;

    // Tar bort gamla felmeddelanden
    fields.forEach(function (field) {
        document.getElementById(field.errorId).textContent = "";
    });

    //Kontrollera varje fält
    fields.forEach(function (field) {
        const input = document.getElementById(field.id);

        if (input.value.trim() === "") {
            document.getElementById(field.errorId).textContent = field.message;
            isValid = false;
        }
    });


    // Hamburgemenyn

    const headerNavBtn = document.querySelector(".menu-toggle");
    const headerNav = document.querySelector(".header-nav")

    headerNavBtn.addEventListener("click", function () {
        headerNav.classList.toggle("open")
    });