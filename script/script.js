const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('current', 'next');
        if (index === currentSlide) {
            slide.classList.add('current');
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.classList.add('next');
        }
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
});

updateSlides();








const customSlides = document.querySelectorAll('.custom-slide');
let currentCustomSlide = 0;

function updateCustomSlides() {
    customSlides.forEach((slide, index) => {
        slide.classList.remove('current');
        if (index === currentCustomSlide) {
            slide.classList.add('current');
        }
    });
}

document.getElementById('customNextBtn').addEventListener('click', () => {
    currentCustomSlide = (currentCustomSlide + 1) % customSlides.length;
    updateCustomSlides();
});

document.getElementById('customPrevBtn').addEventListener('click', () => {
    currentCustomSlide = (currentCustomSlide - 1 + customSlides.length) % customSlides.length;
    updateCustomSlides();
});
updateCustomSlides();







const checkbox = document.getElementById('nav');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('sidebarClose');

closeButton.addEventListener('click', () => {
    checkbox.checked = false;
});
document.getElementById('sidebarToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
});

document.getElementById('sidebarClose').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('-translate-x-full');
});

const movieLink = document.querySelector('a[href="#"]:nth-of-type(1)');
const seriesLink = document.querySelector('a[href="#"]:nth-of-type(2)');

movieLink.addEventListener('click', function(event) {
    event.preventDefault();
    const subMenu = movieLink.nextElementSibling;
    subMenu.classList.toggle('hidden');
});

seriesLink.addEventListener('click', function(event) {
    event.preventDefault();
    const subMenu = seriesLink.nextElementSibling;
    subMenu.classList.toggle('hidden');
});
