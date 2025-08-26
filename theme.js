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

  // Tema claro/escuro
  const themeToggle = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");
  const themeText = document.getElementById("theme-text");

  function updateThemeUI(isDark) {
    if (isDark) {
      iconSun.classList.add("hidden");
      iconMoon.classList.remove("hidden");
      themeText.textContent = "Tema: Escuro";
    } else {
      iconSun.classList.remove("hidden");
      iconMoon.classList.add("hidden");
      themeText.textContent = "Tema: Claro";
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    updateThemeUI(true);
  } else {
    updateThemeUI(false);
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    updateThemeUI(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
