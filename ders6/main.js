const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prew");

let currentIndex = -1;
const length = slide.length;


function nextSlide() {
    if (currentIndex === length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++
    }

    slide.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentIndex + length) % length * 100}%)`;
    })
}
nextSlide()

next.addEventListener("click", () => {
    nextSlide();
})


function prewSlide() {
    if (currentIndex === 0) {
        currentIndex = length - 1;
    } else {
        currentIndex--
    }

    slide.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentIndex + length) % length * 100}%)`;
    })
}
prewSlide()

prev.addEventListener("click", () => {
    prewSlide();
})