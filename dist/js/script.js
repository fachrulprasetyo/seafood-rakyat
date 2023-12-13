const menuBar = document.querySelector(".hamburger-menu");
const menuNav = document.querySelector(".nav-list");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

// klik untuk menghilangkan nav, hanya perlu di klik bagian luar nav
const hamburgerMenu = document.querySelector(".hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !menuNav.contains(e.target)) {
    menuNav.classList.remove("menu-active");
  }
});

// Scroll Navbar
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);

  console.log(window.scrollY);
});
