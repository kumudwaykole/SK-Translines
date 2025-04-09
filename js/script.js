'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}


/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// for automatically changing the featured projects


let currentIndex = 0;
const projectItems = document.querySelectorAll('.project-item');
const totalItems = projectItems.length;

function showNextProject() {
  projectItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('pop');
    } else {
      item.classList.remove('pop');
    }
  });

  currentIndex = (currentIndex + 1) % totalItems; // Move to the next project
}

setInterval(showNextProject, 2000); // Change project every 2 seconds



//blog
const blogElements = document.querySelectorAll('.blog-list li');
let currentBlogIndex = 0;

function showNextBlog() {
  blogElements.forEach((element, index) => {
    if (index === currentBlogIndex) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });

  currentBlogIndex = (currentBlogIndex + 1) % blogElements.length; // Move to the next blog
}

// Show the first blog initially
showNextBlog();

setInterval(showNextBlog, 2000); // Change blog every 2 seconds
