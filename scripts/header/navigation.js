import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector(
    '.navigation__displayed-month'
);

function renderCurrentMonth() {
    // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
    // вставить в .navigation__displayed-month
    const mondayCurrentWeek = getItem('displayedWeekStart');
    const currentWeek = getDisplayedMonth(mondayCurrentWeek);

    displayedMonthElem.innerText = currentWeek;
}

const onChangeWeek = (event) => {
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
    const switchArrowEl = event.target.closest('button');

    if (switchArrowEl === null) {
        return;
    }
    const mondayCurrentWeek = getItem('displayedWeekStart');
    const day = new Date(mondayCurrentWeek).getDate();
    const amountDay = 7;

    const changeWeek =
        switchArrowEl.dataset.direction === 'next' ?
        new Date(mondayCurrentWeek).setDate(day + amountDay) :
        switchArrowEl.dataset.direction === 'prev' ?
        new Date(mondayCurrentWeek).setDate(day - amountDay) :
        getStartOfWeek(new Date());

    setItem('displayedWeekStart', new Date(changeWeek));
    renderHeader();
    renderCurrentMonth();
    renderWeek();
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
};