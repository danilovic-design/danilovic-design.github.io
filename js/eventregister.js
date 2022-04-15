const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", function (clickEvent) {
  console.log(clickEvent.target);
  toggleMenu();
});

document.addEventListener("click", function (clickEvent) {
  if (clickEvent.target !== hamburger || clickEvent.target !== menuIcon) {
    console.log("Not hamburger");
    toggleMenu();
  }
});

menuIcon.addEventListener("click", function (clickEvent) {
  console.log("Menu icon");
  toggleMenu();
});
