// Navbar 
let more = document.getElementById("moreOptions");
let dropdown = document.getElementById("dropdownMenu");
let val = true;
dropdown.style.display = "none";
function changeIcon(val) {
  more.innerHTML = val
    ? '<i class="fa-solid fa-bars" style="color: #000000;"></i>'
    : '<i class="fa-regular fa-circle-xmark" style="color: #000000;"></i>';
}

changeIcon(val);

more.onclick = function () {
  if (val) {
    val = false;
    dropdown.style.display = "block";
  } else {
    val = true;
    dropdown.style.display = "none";
  }
  changeIcon(val);
};



//About section
document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");

  let currentIndex = 0;
  const totalImages = document.querySelectorAll(".carousel-item").length;

  function showNext() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + "%";
    carouselInner.style.transform = "translateX(" + translateValue + ")";
  }

  setInterval(showNext, 3000);
});



// Page Redirection
const contactUsEl = document.getElementById("contactUs");
const contactUsEl2 = document.getElementById("contactUsFooter");
const serviceNavEl = document.getElementById("renderServiceSection");
const serviceNavEl2 = document.getElementById("renderServiceSection1");
const loginEl = document.getElementById("loginSignup");
const loginEl2 = document.getElementById("loginSignup1");
const cookingBtnEl = document.getElementById("cookingBtn");
const cleaningBtnEl = document.getElementById("cleaningBtn");
const getInTouchBtnEl = document.getElementById("getInTouch");


contactUsEl.addEventListener('click', function(){
  window.location.href = 'contactPage.html';
});
loginEl.addEventListener('click',function(){
  window.location.href = 'signInSignUp.html';
});
loginEl2.addEventListener('click',function(){
  window.location.href = 'signInSignUp.html';
});
cookingBtnEl.addEventListener('click',function(){
  window.location.href = 'cookingPage.html';
});
cleaningBtnEl.addEventListener('click',function(){
  window.location.href = 'cleaningSub.html';
})
getInTouchBtnEl.addEventListener('click',function(){
  window.location.href = "contactPage.html";
})

serviceNavEl.addEventListener('click',function(){
  document.getElementById('servicesSection').scrollIntoView({ behavior: 'smooth' });
})
serviceNavEl2.addEventListener('click',function(){
  document.getElementById('servicesSection').scrollIntoView({ behavior: 'smooth' });
})