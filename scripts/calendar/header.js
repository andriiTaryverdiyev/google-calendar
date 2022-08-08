import { getItem } from '../common/storage.js';
import { generateWeekRange, getDateTime } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';
import { storage } from '../common/storage.js';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const renderHeader = () => {
    // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
    let week = generateWeekRange(storage.displayedWeekStart)
        // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
        // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
    for (let elem of week) {
        let day = daysOfWeek[elem.getDay(elem)]
        let dayNumber = elem.getDate(elem)
        let result = document.querySelector('.calendar__header').innerHTML = `
        <div class ="calendar__day-label day-label"data-id="${daysOfWeek[1]}">
    <span class ="day-label__day-name">${daysOfWeek[1]}</span>
    <span class ="day-label__day-number">${week[0].getDate(week)}</span>
    </div>
    <div class ="calendar__day-label day-label"data-id="${daysOfWeek[2]}">
    <span class ="day-label__day-name">${daysOfWeek[2]}</span>
    <span class ="day-label__day-number">${week[1].getDate(week)}</span>
    </div>
    <div class ="calendar__day-label day-label"data-id="${daysOfWeek[3]}">
    <span class ="day-label__day-name">${daysOfWeek[3]}</span>
    <span class ="day-label__day-number">${week[2].getDate(week)}</span>
    </div>
    <div class ="calendar__day-label day-label"data-id="${daysOfWeek[4]}">
    <span class ="day-label__day-name">${daysOfWeek[4]}</span>
    <span class ="day-label__day-number">${week[3].getDate(week)}</span>
    </div>
    <div class ="calendar__day-label day-label"data-id="${daysOfWeek[5]}">
    <span class ="day-label__day-name">${daysOfWeek[5]}</span>
    <span class ="day-label__day-number">${week[4].getDate(week)}</span>
    </div>
    <div class ="calendar__day-label day-label"data-id="${daysOfWeek[6]}">
    <span class ="day-label__day-name">${daysOfWeek[6]}</span>
    <span class ="day-label__day-number">${week[5].getDate(week)}</span>
    </div>
    <div class ="calendar__day-label day-label"data-id="${daysOfWeek[0]}">
    <span class ="day-label__day-name">${daysOfWeek[0]}</span>
    <span class ="day-label__day-number">${week[6].getDate(week)}</span>
    </div>
    `
    }

    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка

};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик