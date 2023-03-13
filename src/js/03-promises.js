import Notiflix from 'notiflix';

const delay = document.querySelector('.delay');
const step = document.querySelector('.step');
const amount = document.querySelector('.amount');
const submitBtn = document.querySelector('.form');


submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i = 0; i < Number(amount.value); i += 1) {
    createPromise(i + 1, Number(delay.value) + Number(step.value) * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        console.log(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
      });
  }
});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
