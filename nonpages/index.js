// js/script.js

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button');
  const navbarLinks = document.getElementById('navbar-links');
  const navbar = document.querySelector('.navbar');

  // Initialize Bootstrap's Collapse instance
  const bsCollapse = new bootstrap.Collapse(navbarLinks, {
    toggle: false
  });

  // Function to check if navbar is expanded
  function isNavbarExpanded() {
    return navbarLinks.classList.contains('show');
  }

  // Function to close the navbar
  function closeNavbar() {
    if (isNavbarExpanded()) {
      bsCollapse.hide();
    }
  }

  // Event listener for the toggler button
  toggleButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
    bsCollapse.toggle();
  });

  // Event listener for clicks on navbar links
  const navLinks = navbarLinks.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeNavbar();
    });
  });

  // Event listener for clicks outside the navbar
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      closeNavbar();
    }
  });

  // Optional: Close the navbar when the Esc key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeNavbar();
    }
  });
});
