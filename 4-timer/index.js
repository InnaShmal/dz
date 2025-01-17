'use strict';

function howLongUntilNewYear() {
    const end = new Date('01.01.2026'); 
    const timeLeft = end - new Date();
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        const remainingTime = end - new Date();
        if (remainingTime <= 0) {
            clearInterval(interval);
            timerElement.textContent = 'HAPPY NEW YEAR!';
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);

        timerElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, timeLeft);
}

howLongUntilNewYear();