const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});



const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-index * 100}%)`;
    });
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Set interval for automatic sliding
setInterval(autoSlide, 3000); // Slide every 3 seconds
