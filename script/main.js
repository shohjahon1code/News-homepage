const headerNav = document.querySelector(".header__nav");
const openMenu = document.querySelector(".header__menu");
const closeMenu = document.querySelector(".header__close");

openMenu.addEventListener("click", () => {
  headerNav.classList.add("header__nav--active");
});

closeMenu.addEventListener("click", () => {
  headerNav.classList.remove("header__nav--active");
});
