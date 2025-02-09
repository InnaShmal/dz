'use strict';

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(`${this.name} говорит на языке ${this.language}.`);
    }
}

class Orc extends Character {
    constructor(name, weapon) {
        super('Орк', name, 'Орочий');
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует с помощью ${this.weapon}!`);
    }

    speak() {
        console.log(`${this.name} рычит на орочьем языке!`);
    }
}

class Elf extends Character {
    constructor(name, spell) {
        super('Эльф', name, 'Эльфийский');
        this.spell = spell;
    }

    castSpell() {
        console.log(`${this.name} использует заклинание: ${this.spell}!`);
    }

    speak() {
        console.log(`${this.name} говорит мягким и мелодичным голосом.`);
    }
}

const orc1 = new Orc('Орк', 'Топор');
const elf1 = new Elf('Леголас', 'Электрический шар');

orc1.speak();
orc1.attack();

elf1.speak();
elf1.castSpell();
