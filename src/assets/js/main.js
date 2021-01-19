document.addEventListener('DOMContentLoaded', function () {
    console.log(1)
});

const header = document.getElementsByClassName("header")[0];
const burger = document.getElementsByClassName("burger")[0];
const menu = document.getElementsByClassName("menu")[0];
burger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("mobile-menu");
    header.classList.toggle("header-mobile")
});