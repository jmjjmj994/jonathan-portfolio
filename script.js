import { header, hamburger, nav, projectImg1, projectImg2, navItem} from "./utilities.js";



window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
   header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
 }


});







hamburger.onclick = () => {
  navItem.forEach((item, index) => {
  
 

    item.style.transitionDelay = `${index * 0.05}s` 
    item.classList.toggle("active")
  });


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






  projectImg1.onmouseenter = () => { 
projectImg1.classList.add("scrolled")

}
projectImg1.onmouseleave = () => { 
  projectImg1.classList.remove("scrolled")
} 




 projectImg2.onmouseenter = () => {
   projectImg2.classList.add("scrolled");
 };
 projectImg2.onmouseleave = () => {
   projectImg2.classList.remove("scrolled");
};  



