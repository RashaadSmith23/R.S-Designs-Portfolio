window.addEventListener("scroll", function () {
  const header = document.getElementById("navbar");
  const logo = document.getElementById("site-logo");

  if (window.scrollY > 50) { // when scrolled down 50px
    header.classList.add("scrolled");
    logo.src = "/assets/RS Designs Logo in white.png"; // new logo
  } else {
    header.classList.remove("scrolled");
    logo.src = "/assets/RS Designs Logo.png"; // original logo
  }
});

/* -------------------------------------------- */

const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down (only on desktop)
window.onscroll = function () {
  if (window.innerWidth > 768) { // check screen size
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  } else {
    // Always hide on mobile
    backToTopBtn.style.display = "none";
  }
};

// Scroll back to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/*
const backToTopBtn = document.getElementById("backToTop");

    // Show button when user scrolls down
    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };

    // Scroll back to top when clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
});
*/

/* -------------------------------------------- */

document.addEventListener('click', function(event) {
  // Check if the clicked element is the navigation menu
  if (event.target.classList.contains('nav ul')) {
    // Hide the navigation menu
    event.target.classList.remove('show');
  }
});


/* -------------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/* -------------------------------------------- */

function openMenu() {
  const sidebar = document.querySelector('nav ul')
  sidebar.style.display = 'block'
}

function closeMenu() {
  const sidebar = document.querySelector('nav ul')
  sidebar.style.display = 'none'
}

/* -------------------------------------------- */

const buttons = document.querySelectorAll('button[data-target]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const element = document.getElementById(targetId);
    element.classList.toggle('show');
  });
});

/* -------------------------------------------- */

document.getElementById("year").textContent = new Date().getFullYear();


window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});