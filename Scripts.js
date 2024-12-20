// Мобільне меню
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Плавна прокрутка до секцій
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Форма зворотного зв'язку
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Тут можна додати логіку відправки форми
  alert('Дякуємо за повідомлення! Ми зв\'яжемося з вами найближчим часом.');
  this.reset();
});
// Мобільне меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Обробка форми
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Дякуємо за повідомлення! Ми зв\'яжемося з вами найближчим часом.');
  this.reset();
});

// Плавна прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
