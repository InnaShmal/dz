'use strict';

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Геолокация не поддерживается в этом браузере'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error)
        );
    });
}

function showLocation() {
    const locationElement = document.getElementById('location');
    locationElement.textContent = '⏳ Определение местоположения...';

    getCurrentLocation()
        .then((coords) => {
            locationElement.textContent = `📍 Широта: ${coords.latitude}, Долгота: ${coords.longitude}`;
        })
        .catch((error) => {
            locationElement.textContent = `❌ Ошибка: ${error.message}`;
        });
}

getCurrentLocation()
    .then((coords) => {
        console.log('📍 Широта:', coords.latitude);
        console.log('📍 Долгота:', coords.longitude);
    })
    .catch((error) => console.error('Ошибка геолокации:', error));
