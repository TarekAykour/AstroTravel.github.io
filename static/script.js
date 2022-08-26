const dropDownBtn = document.querySelector('.dropbtn');
const vehicles = document.querySelector(".dropdown-content");
const nav = document.querySelector(".navigation");
const bars = document.querySelector(".fa-bars");
const audio = document.querySelector("audio");
// audio functions
audio.volume = 0.2;

// slider
let slideIndex = 1;
showSlides(slideIndex);

// next slide
function nextSlide(n) {
  showSlides(slideIndex += 1);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("weather");
  if (n > slides.length ) { slideIndex =1}
  if (n < 1) {slideIndex = slides.length}
  for ( i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "grid";
  slides[slideIndex-1].style.transform = "translateX(0)";
  slides[slideIndex-1].style.transition = "transform 300ms";

}



bars.addEventListener("click", ()=> {
  if(nav.classList.contains("close")){
  nav.classList.remove("close");
  nav.style.transform = 'translateY(0)';


} else {
  nav.classList.add("close");
  nav.style.transform = 'translateY(-100%)';

}

})






function changeVal(e){
dropDownBtn.innerHTML = e;
}


