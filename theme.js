document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav__menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("nav__menu--active");
    });

    document.querySelectorAll(".nav__link").forEach(link => {
      link.addEventListener("click", () => {
        if (menu.classList.contains("nav__menu--active")) {
          menu.classList.remove("nav__menu--active");
        }
      });
    });
  }
});