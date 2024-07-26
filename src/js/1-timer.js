// Импорт flatpickr
import flatpickr from "flatpickr";
// Импорт стилей flatpickr
import "flatpickr/dist/flatpickr.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; // Імпорт стилів

let userSelectedDate;

const picker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      document.querySelector('[data-start]').disabled = true;
    } else {
      userSelectedDate = selectedDate;
      document.querySelector('[data-start]').disabled = false;
    }
  },
});

document.querySelector('[data-start]').addEventListener('click', () => {
  document.querySelector('[data-start]').disabled = true;
  document.getElementById('datetime-picker').disabled = true;

  const timerId = setInterval(() => {
    const now = new Date();
    const timeLeft = userSelectedDate - now;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      document.getElementById('datetime-picker').disabled = false;
      return;
    }

    const time = convertMs(timeLeft);
    document.querySelector('[data-days]').textContent = addLeadingZero(time.days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(time.hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(time.minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(time.seconds);
  }, 1000);
});

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}