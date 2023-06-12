import { header, hamburger, nav, projectImg1, projectImg2, navItem, logo, projectSection} from "./utilities.js";



const sections = document.querySelectorAll('#section');




console.log(sections)

  
/* const highlightNav = navItem.forEach((item) => {
  
  item.onmouseover = () => {
  item.style.cssText = "color:#efefef"
  }
  item.onmouseleave = () => {
     item.style.cssText = "color:#9e9d9d"
  }


});







hamburger.onclick = () => {



  navItem.forEach((item, index) => {
  
    item.style.transitionDelay = `${index * 0.05}s` 
    item.classList.toggle("active")
    
  console.log(item);
    
    
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



 */


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



