import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
let selectedDate;

start.disabled = true;

const addLeadingZero = number => String(number).padStart(2, "0");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date(selectedDates[0]).getTime() <= new Date().getTime()) {
      Notiflix.Notify.failure('Оберіть дату в майбутньому');
    } else {
      selectedDate = selectedDates[0];
      start.disabled = false;
    } 
  },
};

const daysBlock = document.querySelector("[data-days]");
const hoursBlock = document.querySelector("[data-hours]");
const minutesBlock = document.querySelector("[data-minutes]");
const secondsBlock = document.querySelector("[data-seconds]");

let intervalId;

start.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const milliseconds = new Date(selectedDate).getTime() - new Date().getTime();
    const { hours, days, minutes, seconds } = convertMs(milliseconds);
    daysBlock.textContent = addLeadingZero(days);
    hoursBlock.textContent = addLeadingZero(hours);
    minutesBlock.textContent = addLeadingZero(minutes);
    secondsBlock.textContent = addLeadingZero(seconds);

    if (milliseconds <= 0) {
      clearInterval(intervalId);
      daysBlock.textContent = "00";
      hoursBlock.textContent = "00";
      minutesBlock.textContent = "00";
      secondsBlock.textContent = "00";
    }
  }, 1000)
})

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}