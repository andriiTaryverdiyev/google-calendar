import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale

    let container = document.querySelector('.calendar__time-scale')
    let array = createNumbersArray(0, 25)
    container.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        container.innerHTML += `
        <div class ="time-slot">
      <span class ="time-slot__time">${array[i]}:00</span>
      </div>
      `
    }
};