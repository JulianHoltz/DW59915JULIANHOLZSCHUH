let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  const slideWidth = document.querySelector('.slide').clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Autoplay (opcional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  showSlide(currentIndex);
}, 3000); // Cambia cada 3 segundos

