'use strict';

/**
 * función utilitaria
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem instanceof NodeList) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * barra de navegación en responsive
 */
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

// Abrir navbar
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

// Cerrar navbar
const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

navbarLinks.forEach(link => {
  link.addEventListener("click", closeNavbar);
});

/**
 * Header activo, background blanco y mostrar flecha
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  // Cuando pasa de 100, se muestra la barra en blanco y la flecha
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Inicializar eventos al cargar la página
window.addEventListener('load', () => {
  activeElemOnScroll();
});

window.addEventListener('scroll', activeElemOnScroll);
