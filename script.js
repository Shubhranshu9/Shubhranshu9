// You can add any necessary JS code here
// For example, smooth scrolling when clicking on nav links

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset if needed
                behavior: 'smooth'
            });
        });
    });
});

// Scripts for automatic image transition and text change
let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function changeSlide() {
    // Hide all slides and text
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
    });

    // Show the current slide and its text
    slides[currentIndex].classList.add('active');

    // Update the index for the next slide
    currentIndex = (currentIndex + 1) % totalSlides;
}

// Start automatic slide change every 5 seconds
setInterval(changeSlide, 5000);

// Initially show the first slide
changeSlide();

function toggleDetails(id) {
    const details = document.getElementById(`details-${id}`);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Select all service headings
    const serviceHeadings = document.querySelectorAll(".service-heading");
  
    serviceHeadings.forEach(heading => {
      heading.addEventListener("click", function() {
        const serviceBox = heading.closest('.service-box');
        const serviceDetails = serviceBox.querySelector('.service-details');
        
        // Toggle the visibility of the details
        if (serviceDetails.style.display === 'block') {
          serviceDetails.style.display = 'none';
        } else {
          serviceDetails.style.display = 'block';
        }
      });
    });
  });
  