function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const texts = ["Frontend Developer", "Cyber Security Enthusiast", "Web Developer", "Software Engineer"];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;

function type() {
  currentText = texts[count];

  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  document.querySelector('.section__text__p2').textContent = currentText.substring(0, index);

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
}

type();
document.getElementById('year').textContent = new Date().getFullYear();
