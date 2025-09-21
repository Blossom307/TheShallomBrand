// ==========================
// SCRIPT.JS
// Scroll-triggered animations
// ==========================

document.addEventListener("DOMContentLoaded", function () {

  // ----- Helper: Check if element is in viewport -----
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50
    );
  }

  // ----- PRODUCTS PAGE: fade-in & zoom-in on scroll -----
  const productCards = document.querySelectorAll('.product-card');

  function animateProducts() {
    productCards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', animateProducts);
  animateProducts(); // Initial check

  // ----- CONTACT PAGE: slide-in form fields -----
  const formFields = document.querySelectorAll('form input, form textarea');

  function animateFormFields() {
    formFields.forEach(field => {
      if (isInViewport(field)) {
        field.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', animateFormFields);
  animateFormFields(); // Initial check

  // ----- GENERIC FADE-IN ELEMENTS -----
  const fadeElements = document.querySelectorAll('.fade-in');

  function animateFadeElements() {
    fadeElements.forEach(el => {
      if (isInViewport(el)) {
        el.style.animationPlayState = 'running';
      }
    });
  }

  window.addEventListener('scroll', animateFadeElements);
  animateFadeElements(); // Initial check

});


// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
});



// Contact form
const contactForm = document.getElementById('contactForm');
const statusDiv = document.getElementById('form-status');

if (contactForm && statusDiv) { // Only run if the form exists
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_8y3kc1n', 'template_ulzhmga', this, 'mToVuoxYgy7rpIrAh')
      .then(() => {
        statusDiv.textContent = "✅ Message sent successfully!";
        statusDiv.className = "show success";

        contactForm.reset();

        // Auto-clear after 5 seconds with fade-out
        setTimeout(() => {
          statusDiv.classList.remove("show");
          statusDiv.textContent = "";
        }, 5000);
      })
      .catch(error => {
        console.error("EmailJS error:", error);
        statusDiv.textContent = "❌ Oops... Something went wrong. Please try again.";
        statusDiv.className = "show error";
      });
  });
}
