const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.querySelectorAll(".nav-item-link");

burger.addEventListener('click', () =>{
    burgerMenu.classList.toggle("burger-menu--active");
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        burgerMenu.classList.remove("burger-menu--active");
    });
})