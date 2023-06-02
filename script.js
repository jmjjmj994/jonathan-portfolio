import { header } from "./utilities.js";



window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
   header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
 }


});