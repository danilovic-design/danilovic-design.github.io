const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(go) {
  console.log("Toggling...");
  if (!go) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", function (clickEvent) {
  console.log(clickEvent.target);
  toggleMenu(true);
});

document.addEventListener("click", function (clickEvent) {
  if (clickEvent.target !== hamburger || clickEvent.target !== menuIcon) {
    console.log("Not hamburger");
    toggleMenu(false);
  }
});

menuIcon.addEventListener("click", function (clickEvent) {
  console.log("Menu icon");
  toggleMenu(true);
});
