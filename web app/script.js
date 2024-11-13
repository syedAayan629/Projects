var menuBtn = document.getElementById("menu-btn");
var navLinks = document.getElementById("nav-links");
var menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function(e) {
  navLinks.classList.toggle("open");

  var isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", function(e) {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

var scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000
};

// header container
ScrollReveal().reveal(".header__content h1", {
  distance: scrollRevealOptions.distance,
  origin: scrollRevealOptions.origin,
  duration: scrollRevealOptions.duration
});

ScrollReveal().reveal(".header__btn", {
  distance: scrollRevealOptions.distance,
  origin: scrollRevealOptions.origin,
  duration: scrollRevealOptions.duration,
  delay: 500
});

// service container
ScrollReveal().reveal(".service__card", {
  distance: scrollRevealOptions.distance,
  origin: scrollRevealOptions.origin,
  duration: scrollRevealOptions.duration,
  interval: 500
});

// price container
ScrollReveal().reveal(".price__card", {
  distance: scrollRevealOptions.distance,
  origin: scrollRevealOptions.origin,
  duration: scrollRevealOptions.duration,
  interval: 500
});

var swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  }
});

