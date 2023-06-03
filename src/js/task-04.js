const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

decrementButton.addEventListener('click', () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementButton.addEventListener('click', () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
