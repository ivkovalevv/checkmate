const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.querySelectorAll(".nav-item-link");
const players = document.querySelectorAll(".player");
const footerButtons = document.querySelectorAll(".footer__item");

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu--active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu--active");
  });
});

footerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    players.forEach((player) => {
      player.classList.remove("player--active");
    });
    footerButtons.forEach((button) => {
      button.classList.remove("footer__link--active");
    });
    document
      .querySelector(`.${button.dataset.target}`)
      .classList.add("player--active");
    document
      .querySelector(`[data-target="${button.dataset.target}"]`)
      .classList.add("footer__link--active");
  });
});
