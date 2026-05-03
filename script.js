// Scroll animation
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

// Form submit (demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent! (Demo)");
});