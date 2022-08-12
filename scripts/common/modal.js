const modalElem = document.querySelector('.modal');
const modalContentElem = document.querySelector('.modal__content');
const createBtn = document.querySelector('.create-event-btn');
const closeBtn = document.querySelector('.create-event__close-btn');


// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана
export const openModal = () => {
    modalElem.classList.remove('hidden');
};

export const closeModal = () => {
    modalElem.classList.add('hidden');
};