const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

const slides = document.querySelectorAll(".slide")

let currentSlide = 0
const maxSlideCount = slides.length - 1

nextBtn.addEventListener('click', () => {

    if (currentSlide === maxSlideCount) {
        currentSlide = 0
    } else {
        currentSlide++
    }

    slideMove(slides)
})

prevBtn.addEventListener('click', () => {

    if (currentSlide === 0) {
        currentSlide = maxSlideCount
    } else {
        currentSlide--
    }

    slideMove(slides)

})

function slideMove(slides) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`
    })
}

// bestpractice way, like a senior software engineer, DRY => Dont Reapeat Yourself, SOLID principles