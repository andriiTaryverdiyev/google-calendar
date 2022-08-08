import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale

    let container = document.querySelector('.calendar__time-scale')
    let array = createNumbersArray(0, 25)
    for (let i = 0; i <= array.length; i++) {
        container.innerHTML = `
        <div class ="time-slot">
      <span class ="time-slot__time"></span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[1]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[2]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[3]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[4]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[5]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[6]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[7]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[8]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[9]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[10]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[11]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[12]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[13]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[14]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[15]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[16]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[17]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[18]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[19]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[20]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[21]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[22]}</span>
      </div>
      <div class ="time-slot">
      <span class ="time-slot__time">${array[23]}</span>
      </div>
      </div>`
    }
};