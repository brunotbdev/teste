const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper");
const links = document.querySelectorAll(".nav-item");
const mediaQuery = window.matchMedia("(max-width: 59.5em)");

/* scroll */
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    links.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    navMenu.classList.remove("aberto");
    if (mediaQuery.matches) {
      navbar.toggleAttribute("data-visible");
    }

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

/* toggle menu */
navMenu.addEventListener("click", () => {
  navbar.toggleAttribute("data-visible");
  navMenu.classList.toggle("aberto");
});

/* sombra no scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navWrapper.classList.add("scrolled");
  } else {
    navWrapper.classList.remove("scrolled");
  }
});

/* animaçao scroll */

ScrollReveal().reveal(".left", {
  origin: "left",
  duration: 2000,
  distance: "20%",
});

ScrollReveal().reveal(".right", {
  origin: "right",
  duration: 2000,
  distance: "20%",
});
