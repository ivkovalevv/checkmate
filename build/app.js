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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXJcIik7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXItbWVudVwiKTtcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbS1saW5rXCIpO1xuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItbWVudS0tYWN0aXZlXCIpO1xufSk7XG5cbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItbWVudS0tYWN0aXZlXCIpO1xuICAgIH0pO1xufSkiXX0=
