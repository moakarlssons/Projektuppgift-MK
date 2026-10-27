"use strict"

// Hamburgemenyn

const headerNavBtn = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav");
if (headerNavBtn && headerNav) {
    headerNavBtn.addEventListener("click", function () {
        headerNav.classList.toggle("open");
    });
}

