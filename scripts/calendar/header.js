import { getItem } from '../common/storage.js';
import { generateWeekRange, getDateTime } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';
import { storage } from '../common/storage.js';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const currentDay = (day, className) => {
    return new Date(new Date().toDateString()).getTime() === day.getTime() ?
        `${className} active` :
        className;
};
export const renderHeader = () => {
    // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
    let week = generateWeekRange(storage.displayedWeekStart)
        // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
        // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
    const headerElement = document.querySelector('.calendar__header');
    headerElement.innerHTML = '';
    week.map((day) => {
        return (headerElement.innerHTML += `<div class="calendar__day-label">
              <span class="${currentDay(day, 'day-label__day-name')}">${daysOfWeek[
              day.getDay()
            ].toUpperCase()}</span>
              <span class="${currentDay(
                day,
                'day-label__day-number'
              )}">${day.getDate()}</span>
              </div>`);
    });
}

// в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка



// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик
const createButton = document.querySelector('.create-event-btn');
createButton.addEventListener('click', openModal);