const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById('value');

counterValue.innerHTML = 0;

decrement.addEventListener('click', ()=>{
    counterValue.innerHTML = parseInt(counterValue.textContent) - 1;
});

increment.addEventListener('click', ()=>{
    counterValue.innerHTML = parseInt(counterValue.textContent) + 1;
});