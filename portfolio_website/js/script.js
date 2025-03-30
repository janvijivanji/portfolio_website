document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest("nav") &&
        navMenu.classList.contains("active")
      ) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });
  