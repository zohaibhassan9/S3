const carousel = document.querySelector("#image-carousel");
const images = document.querySelectorAll("#image-carousel img");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentIndex = 0;
const imagesToShow = 3; // Number of images visible at a time
const totalImages = images.length;

// Calculate the width of a single image
const imageWidth = images[0].clientWidth;

// Update carousel position
const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * (100 / imagesToShow)}%)`;
};

// Add event listeners for buttons
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

// Initialize the carousel
updateCarousel();
