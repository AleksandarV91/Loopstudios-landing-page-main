/* mobile nav */

const navbar = document.querySelector(".nav");
const mobNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelector(".nav-links");

/* open/close nav */

mobNav.addEventListener("click", (event) => {
  event.preventDefault();

  /* open/close icons */
  const btn = document.querySelector(".nav-btn");
  const open = "images/icon-hamburger.svg";
  const close = "images/icon-close.svg";

  if (navLinks.classList.contains("show")) {
    btn.src = open;
    navbar.style.backgroundColor = "transparent";
    navLinks.classList.remove("show");
  } else {
    btn.src = close;
    navbar.style.backgroundColor = "black";
    navLinks.classList.add("show");
  }
});
