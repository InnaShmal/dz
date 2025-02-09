'use strict';

function pokemon(effect) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
        if (data.abilities && data.abilities.length > 0) {
            const abilityUrl = data.abilities[0].ability.url;
            console.log('URL способности:', abilityUrl);

            const requestAbility = new XMLHttpRequest();
            requestAbility.open('GET', abilityUrl);
            requestAbility.send();

            requestAbility.addEventListener('load', function () {
                const abilityData = JSON.parse(this.responseText);
                console.log('Данные способности:', abilityData);
                if (
                    abilityData.effect_entries &&
                    abilityData.effect_entries.length > 0
                ) {
                    let englishEntry = null;
                    for (
                        let i = 0;
                        i < abilityData.effect_entries.length;
                        i++
                    ) {
                        if (
                            abilityData.effect_entries[i].language.name === 'en'
                        ) {
                            englishEntry = abilityData.effect_entries[i];
                            break;
                        }
                    }

                    if (englishEntry) {
                        console.log(
                            'Описание способности (на английском):',
                            englishEntry.effect
                        );
                    } else {
                        console.error('Описание на английском не найдено');
                    }
                } else {
                    console.error('Информация о способностях отсутствует');
                }
            });
        }
    });
}

pokemon();
