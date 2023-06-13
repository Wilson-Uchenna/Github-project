let unList = document.querySelector(".un-list");
let burgerMenu = document.querySelector(".hamburger");


burgerMenu.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    headerButton = document.querySelector(".header button")
    navBar.classList.toggle("active");
    headerButton.classList.toggle("active")
}