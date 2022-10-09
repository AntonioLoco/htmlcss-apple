// DOM
const headerMenu = document.getElementById("header-menu");
const hamburgerButton = document.getElementById("hamburger-button");


// Evento Hamburger Menu Open and Close
hamburgerButton.addEventListener("click", function(){
    headerMenu.classList.toggle("hamburger-menu-open");
});

