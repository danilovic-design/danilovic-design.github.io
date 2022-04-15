const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(setMenuOn) {
  if (setMenuOn) {
    menu.classList.add("showMenu");
    menuIcon.style.display = "none";
  } else {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  }
}

document.addEventListener("click", function (clickEvent) {
  if (
    clickEvent.target !== hamburger &&
    clickEvent.target !== menuIcon &&
    clickEvent.target !== menu
  ) {
    toggleMenu(false);
  }
});

menuIcon.addEventListener("click", function (clickEvent) {
  toggleMenu(true);
});
