"use strict";
// ---------- MENU LISTAS ----------
const Lists = document.querySelectorAll(".menu-listas a");
Lists.forEach((list) => {
  list.addEventListener("click", () => {
    const listActive = document.querySelector(".menu-listas a.active");
    if (listActive === null) {
      list.classList.add("active");
    } else {
      list.classList.add("active");
      listActive.classList.remove("active");
    }
  });
});

// ---------- MENU HAMBURGUER ----------
const menuOpen = document.querySelector(".menu-open");
const menuListas = document.querySelector(".menu-listas");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("active");
  menuListas.classList.toggle("active");
});

// ---------- SLIDE ----------
// ---------- Carregamento de imagens ------------
const images = [
  { id: "0", src: "img/00.jpg" },
  { id: "1", src: "img/01.jpg" },
  { id: "2", src: "img/02.jpg" },
  { id: "3", src: "img/03.jpg" },
];

const slideImages = document.querySelector(".slide-images");
const slideBalls = document.querySelector(".slide-balls");

const loadImages = (images) => {
  images.forEach((image) => {
    slideImages.innerHTML += `
        <div class="slide-img">
            <img id="${image.id}" src="${image.src}" />
          </div>
        `;
    slideBalls.innerHTML += `
        <div id="${image.id}" class="ball"></div>
        `;
  });
};

loadImages(images);

// ---------- Carregamento da largura do slide ----------
slideImages.style.width = `calc(100% * ${images.length})`;

// ---------- Variáveis ----------
let currentSlide = 0;
const btnRight = document.querySelector(".fa-chevron-right");
const btnLeft = document.querySelector(".fa-chevron-left");
const balls = document.querySelectorAll(".slide-balls .ball");
balls[0].classList.add("atual");

// ---------- Eventos ----------
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

// ---------- Avançar slide ----------
function nextSlide() {
  if (currentSlide >= images.length - 1) {
    currentSlide = 0;
    slideImages.style.marginLeft = `calc(-100% * ${currentSlide})`;
    balls[currentSlide].classList.add("atual");
    balls[images.length - 1].classList.remove("atual");
  } else {
    currentSlide++;
    slideImages.style.marginLeft = `calc(-100% * ${currentSlide})`;
    balls[currentSlide].classList.add("atual");
    balls[currentSlide - 1].classList.remove("atual");
  }
}

// ---------- Retroceder slide ----------
function previousSlide() {
  if (currentSlide === 0) {
    balls[currentSlide].classList.remove("atual");
    currentSlide = images.length - 1;
    slideImages.style.marginLeft = `calc(-100% * ${currentSlide})`;
    balls[images.length - 1].classList.add("atual");
  } else {
    currentSlide--;
    slideImages.style.marginLeft = `calc(-100% * ${currentSlide})`;
    balls[currentSlide].classList.add("atual");
    balls[currentSlide + 1].classList.remove("atual");
  }
}

// ---------- Slide automático ----------
setInterval(nextSlide, 3000);
