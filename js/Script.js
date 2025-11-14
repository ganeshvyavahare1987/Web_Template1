document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks! We’ll get back to you soon.');
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});