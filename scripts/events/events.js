import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');
const eventElem = document.querySelector('.event');
const calendarTimeSlotElem = document.querySelector('.calendar__time-slot');

function handleEventClick(event) {
    // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
    // установите eventIdToDelete с id события в storage
    const events = getItem('events') || [];

    setItem('eventIdToDelete', event.id);

    openPopup(event.clientX, event.clientY);
    console.log(getItem('eventIdToDelete'));
}

function removeEventsFromCalendar() {
    // ф-ция для удаления всех событий с календаря
    const events = getItem('events') || [];
    events.map(() => {
        const eventElem = document.querySelector('.event');
        if (eventElem !== null) {
            eventElem.remove();
        }
    });
}

const createEventElement = (event) => {
    // ф-ция создает DOM элемент события
    // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
    // нужно добавить id события в дата атрибут
    // здесь для создания DOM элемента события используйте document.createElement
    const { start, end, title, id } = event;
    const durationInMins = (end - start) / 1000 / 60;

    const eventElem = document.createElement('div');
    eventElem.classList.add('event');
    eventElem.dataset.eventId = id;
    eventElem.style.top = `${new Date(start).getMinutes()}px`;
    eventElem.style.height = `${durationInMins}px`;

    const eventTitleElem = document.createElement('div');
    eventTitleElem.textContent = title;
    eventTitleElem.classList.add('event__title');

    const eventTimeElem = document.createElement('div');
    eventTitleElem.textContent = `${new Date(start).getHours()}: ${new Date(
    start
  ).getMinutes()} - ${new Date(end).getHours()}:${new Date(end).getMinutes()}`;
    eventTitleElem.classList.add('event__time');
    eventElem.append(eventTitleElem, eventTimeElem);

    return eventElem;
};

export const renderEvents = () => {
    // достаем из storage все события и дату понедельника отображаемой недели
    removeEventsFromCalendar();
    const eventsStorage = getItem('events') || [];

    const startDateTime = getItem('displayedWeekStart');
    const endDateTime = shmoment(startDateTime).add('days', 7).result();
    // фильтруем события, оставляем только те, что входят в текущую неделю

    eventsStorage
        .filter((event) => {
            return event.start >= startDateTime && event.end < endDateTime;
        })
        .forEach((event) => {
            const { start } = event;
            const eventElem = createEventElement(event);
            const slotElem = document.querySelector(
                `.calendar__day[data-day="${start.getDate()}"] .calendar__time-slot[data-time="${start.getHours()}"]`
            );
            slotElem.append(eventElem);
        });

    // создаем для них DOM элементы с помощью createEventElement

    // для каждого события находим на странице временную ячейку (.calendar__time-slot)

    // и вставляем туда событие

    // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
    // не забудьте удалить с календаря старые события перед добавлением новых
};

function onDeleteEvent() {
    // достаем из storage массив событий и eventIdToDelete
    // удаляем из массива нужное событие и записываем в storage новый массив
    // закрыть попап
    // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)

    const events = getItem('events') || [];
    const eventId = getItem('eventIdToDelete');

    const filteredEvents = events.filter((event) => event.id === eventId);
    removeEventsFromCalendar();
    setItem('events', filteredEvents);

    closePopup();
    renderEvents();
}

weekElem.addEventListener('click', createEventElement);

deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);