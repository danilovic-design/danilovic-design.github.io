let myScrollFunc = function () {
  let scroller = document.getElementById("uparrow");
  //console.log(window.scrollY);
  if (window.scrollY > 800) {
    scroller.classList.remove("uparrow-hidden");
  } else {
    scroller.classList.add("uparrow-hidden");
  }
};

window.addEventListener("scroll", myScrollFunc);
