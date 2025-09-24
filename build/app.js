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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVyZ2VyXCIpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVyZ2VyLW1lbnVcIik7XG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW0tbGlua1wiKTtcbmNvbnN0IHBsYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllclwiKTtcbmNvbnN0IGZvb3RlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb3Rlcl9faXRlbVwiKTtcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci1tZW51LS1hY3RpdmVcIik7XG59KTtcblxubmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyLW1lbnUtLWFjdGl2ZVwiKTtcbiAgfSk7XG59KTtcblxuZm9vdGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWVyLS1hY3RpdmVcIik7XG4gICAgfSk7XG4gICAgZm9vdGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZm9vdGVyX19saW5rLS1hY3RpdmVcIik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuJHtidXR0b24uZGF0YXNldC50YXJnZXR9YClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLS1hY3RpdmVcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke2J1dHRvbi5kYXRhc2V0LnRhcmdldH1cIl1gKVxuICAgICAgLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xpbmstLWFjdGl2ZVwiKTtcbiAgfSk7XG59KTtcbiJdfQ==
