import { getItem, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal } from '../common/modal.js';

const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');

function clearEventForm() {
    // ф-ция должна очистить поля формы от значений
    eventFormElem.reset();
}

function onCloseEventForm() {
    closeModal();
    clearEventForm();
}

function onCreateEvent(event) {
    // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
    // создавать или менять DOM элементы здесь не нужно. Этим займутся другие ф-ции
    // при подтверждении формы нужно считать данные с формы
    // с формы вы получите поля date, startTime, endTime, title, description
    // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
    // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
    // полученное событие добавляем в массив событий, что хранится в storage
    // закрываем форму
    // и запускаем перерисовку событий с помощью renderEvents
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(eventFormElem));
    const { title, date, startTime, endTime, description } = formData;

    const descriptionForm = {
        id: Math.random().toString(),
        title,
        description,
        start: getDateTime(date, startTime),
        end: getDateTime(date, endTime),
    };
    setItem('events', [descriptionForm]);
    getItem('events');
    onCloseEventForm();
    renderEvents();
}

export function initEventForm() {
    // подпишитесь на сабмит формы и на закрытие формы
    eventFormElem.addEventListener('submit', onCreateEvent);
    closeEventFormBtn.addEventListener('click', onCloseEventForm);
}