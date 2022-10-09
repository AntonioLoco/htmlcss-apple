// DOM
const headerMenu = document.getElementById("header-menu");
const hamburgerButton = document.getElementById("hamburger-button");
const searchBar = document.getElementById("search-hamburger");
const labelSearch = document.querySelector("label");
console.log(labelSearch);

// Evento Hamburger Menu Open and Close
hamburgerButton.addEventListener("click", function(){
    headerMenu.classList.toggle("hamburger-menu-open");
});

searchBar.addEventListener("focus", function(){
    labelSearch.classList.add("d-none");
})

searchBar.addEventListener("blur", function(){
    labelSearch.classList.remove("d-none");
})

