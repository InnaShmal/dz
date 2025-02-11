'use strict'

function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log("Данные о покемоне:", data);
            
            if (!data.abilities?.length) {
                throw new Error("У покемона нет способностей");
            }

            const abilityUrl = data.abilities[0].ability.url;
            console.log("URL способности:", abilityUrl);

            return fetch(abilityUrl);
        })
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            return response.json();
        })
        .then(abilityData => {
            console.log("Данные способности:", abilityData);

            const englishEntry = abilityData.effect_entries.find(entry => entry.language.name === "en");

            if (englishEntry) {
                console.log("Описание способности (на английском):", englishEntry.effect);
            } else {
                console.error("Описание на английском не найдено");
            }
        })
        .catch(error => console.error("Ошибка:", error.message));
}

getPokemon();