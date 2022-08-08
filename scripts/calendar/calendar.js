 import { getItem } from '../common/storage.js';
 import { generateWeekRange } from '../common/time.utils.js';
 import { renderEvents } from '../events/events.js';
 import { createNumbersArray } from '../common/createNumbersArray.js';

 const generateDay = () => {
     // функция должна сгенерировать и вернуть разметку дня в виде строки
     // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
     let container = document.querySelector('.calendar__week')
     let array = createNumbersArray(0, 25)
     for (let i = 0; i <= array.length; i++) {
         container.innerHTML = `
         <div class ="calendar__day" data-day="">
         <div class ="calendar__time-slot" data-time="0">
       </div>
       <div class ="calendar__time-slot" data-time="1">
       </div>
       <div class ="calendar__time-slot" data-time="2">
       </div>
       <div class ="calendar__time-slot" data-time="3">
       </div>
       <div class ="calendar__time-slot" data-time="4">
       </div>
       <div class ="calendar__time-slot" data-time="5">
       </div>
       <div class ="calendar__time-slot" data-time="6">
       </div>
       <div class ="calendar__time-slot" data-time="7">
       </div>
       <div class ="calendar__time-slot" data-time="8">
       </div>
       <div class ="calendar__time-slot" data-time="9">
       </div>
       <div class ="calendar__time-slot" data-time="10">
       </div>
       <div class ="calendar__time-slot" data-time="11">
       </div>
       <div class ="calendar__time-slot" data-time="12">
       </div>
       <div class ="calendar__time-slot" data-time="13">
       </div>
       <div class ="calendar__time-slot" data-time="14">
       </div>
       <div class ="calendar__time-slot" data-time="15">
       </div>
       <div class ="calendar__time-slot" data-time="16">
       </div>
       <div class ="calendar__time-slot" data-time="17">
       </div>
       <div class ="calendar__time-slot" data-time="18">
       </div>
       <div class ="calendar__time-slot" data-time="19">
       </div>
       <div class ="calendar__time-slot" data-time="20">
       </div>
       <div class ="calendar__time-slot" data-time="21">
       </div>
       <div class ="calendar__time-slot" data-time="22">
       </div>
       <div class ="calendar__time-slot" data-time="23">
       </div>
       
       </div>`
     }

 };
 generateDay()

 export const renderWeek = () => {
     // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
     // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
     // массив дней, которые нужно отобразить, считаем ф-цией generateWeekRange на основе displayedWeekStart из storage
     // каждый день должен содержать в дата атрибуте порядковый номер дня в месяце
     // после того, как отрисовали всю сетку для отображаемой недели, нужно отобразить события этой недели с помощью renderEvents
 };