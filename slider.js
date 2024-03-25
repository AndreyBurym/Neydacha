let slider = document.querySelector(".slider");
let sliderSlide = document.querySelectorAll(".slider__slide");
let sliderDots = document.querySelectorAll(".slider__dots li");

let currentIndex = 0;
let totalSlides = sliderSlide.length;

function goToSlide(index) {
  if (index === currentIndex) return;

  sliderSlide[currentIndex].classList.remove("active-slide");
  sliderSlide[index].classList.add("active-slide");

  currentIndex = index;
}
