let slideIndex = 0;
let slideInterval;

function plusSlides(n) {
  clearInterval(slideInterval); // Oprește schimbarea automată temporar
  showSlides((slideIndex += n));
  startSlideShow(); // Repornește schimbarea automată
}

function currentSlide(n) {
  clearInterval(slideInterval); // Oprește schimbarea automată temporar
  showSlides((slideIndex = n));
  startSlideShow(); // Repornește schimbarea automată
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function startSlideShow() {
  slideInterval = setInterval(function () {
    showSlides(++slideIndex);
  }, 5000); // Schimbă la fiecare 5 secunde
}

// Inițializează slideshow-ul
showSlides(slideIndex);
startSlideShow();
