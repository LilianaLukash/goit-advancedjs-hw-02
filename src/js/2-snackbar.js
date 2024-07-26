import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; // Імпорт стилів
document.getElementById('promiseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const delay = Number(this.delay.value);
    const state = this.state.value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })
    .then(delay => {
        iziToast.success({
            title: 'Fulfilled',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight'
        });
    })
    .catch(delay => {
        iziToast.error({
            title: 'Rejected',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight'
        });
    });
});