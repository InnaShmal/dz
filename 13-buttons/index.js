'use strict';

const buttonContainer = document.getElementById('button-container');
const counterElement = document.getElementById('counter');
let counter = 0;
let lastClickedButton = null;

buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        if (lastClickedButton) {
            lastClickedButton.textContent = 'Нажми меня';
        }
        event.target.textContent = 'Нажата';
        lastClickedButton = event.target;
        counter++;
        counterElement.textContent = counter;
    }
});
