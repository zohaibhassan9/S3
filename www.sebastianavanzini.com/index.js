const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// Get the width of one image (including margin)
const imageWidth = document.querySelector(".gallery span img").offsetWidth + 20; // 20px for the gap between images

// Scroll right by one image
nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += imageWidth;
});

// Scroll left by one image
backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= imageWidth;
});

// Add wheel scrolling behavior for smooth horizontal scrolling
scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});
