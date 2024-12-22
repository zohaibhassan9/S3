// script.js
const carousel = document.getElementById("image-carousel");
const images = document.querySelectorAll("#image-carousel img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
let imagesToShow = calculateImagesToShow();
const totalImages = images.length;

function calculateImagesToShow() {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    return 3;
}

function updateCarousel() {
    const shiftPercentage = (100 / imagesToShow) * currentIndex;
    carousel.style.transform = `translateX(-${shiftPercentage}%)`;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < totalImages - imagesToShow) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener("resize", () => {
    imagesToShow = calculateImagesToShow();
    currentIndex = Math.min(currentIndex, totalImages - imagesToShow);
    updateCarousel();
});

updateCarousel();
