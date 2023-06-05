import { header, hamburger, nav } from "./utilities.js";



window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
   header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
 }


});


hamburger.onclick = () => {
  let menuOpen = false;

  if (!menuOpen) {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active")
    let menuOpen = true;
  } else {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active")
    let menuOpen = false;
  }

};


