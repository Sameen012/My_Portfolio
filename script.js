function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const heroSubtitle = document.querySelector('.section__text__p2');

if (heroSubtitle) {
  const texts = ["Frontend Developer", "Cyber Security Enthusiast", "Web Developer", "Software Engineer"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let isDeleting = false;

  const type = () => {
    currentText = texts[count];
    index += isDeleting ? -1 : 1;
    heroSubtitle.textContent = currentText.substring(0, index);

    if (!isDeleting && index === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      count = (count + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 100 : 150);
    }
  };

  type();
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.remove('open');
    icon.classList.remove('open');
  });
});

const initScrollAnimations = () => {
  const selectors = [
    '.section__pic-container',
    '.section__text',
    '.about-hero',
    '.summary-card',
    '.about-card',
    '.experience-card',
    '.achievement-card',
    '.project-card',
    '.project-writeups article',
    '.cert-card',
    '.cert-gallery figure',
    '.contact-info-card',
    '.contact-form'
  ];

  const elements = document.querySelectorAll(selectors.join(','));
  if (!elements.length) return;

  elements.forEach(el => el.classList.add('animate-on-scroll'));

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', initScrollAnimations);

