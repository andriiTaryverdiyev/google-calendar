import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { renderEvents } from '../events/events.js';
import { createNumbersArray } from '../common/createNumbersArray.js';

const generateDay = () => {
    // функция должна сгенерировать и вернуть разметку дня в виде строки
    // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
    let timeSlots = '';

    createNumbersArray(0, 24).map((time) => {
        timeSlots += `<div class="calendar__time-slot" data-time="${time}"></div>`;
    });

    return timeSlots;
};

export const renderWeek = () => {
    // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
    // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
    // массив дней, которые нужно отобразить, считаем ф-цией generateWeekRange на основе displayedWeekStart из storage
    // каждый день должен содержать в дата атрибуте порядковый номер дня в месяце
    // после того, как отрисовали всю сетку для отображаемой недели, нужно отобразить события этой недели с помощью renderEvents

    const mondayCurrentWeek = getItem('displayedWeekStart');
    const weekRange = generateWeekRange(mondayCurrentWeek);
    const calendarWeekElem = document.querySelector('.calendar__week');

    calendarWeekElem.innerHTML = '';

    weekRange.map((day) => {
        calendarWeekElem.innerHTML += `<div class="calendar__day" data-day="${day.getDate()}" >${generateDay()}</div>`;
    });

    renderEvents();
};