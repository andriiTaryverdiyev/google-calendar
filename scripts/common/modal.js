const modalElem = document.querySelector('.modal');
const modalContentElem = document.querySelector('.modal__content');
const createBtn = document.querySelector('.create-event-btn');
const closeBtn = document.querySelector('.create-event__close-btn');

createBtn.addEventListener('click', openModal)

// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана
export function openModal() {
    modalElem.classList.remove('hidden')
    modalContentElem.addEventListener('click', closeModal)
}

export function closeModal(e) {
    if (!e.target.closest('.modal__content') || e.target == closeBtn) {
        modalElem.classList.add('hidden')
    }
}