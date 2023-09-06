const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


function openModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

openBtn.addEventListener('click', openModal)

function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// key === 'Escape' 27

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains("hidden")) {
        closeModal();
    }
})