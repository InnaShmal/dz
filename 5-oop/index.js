'use strict';

const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.speak = function () {
    console.log(`${this.name} speaks ${this.language}`);
};

const Ork = function (name, weapon) {
    this.race = 'Ork';
    this.name = name;
    this.language = 'Orcish';
    this.weapon = weapon;
};

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function () {
    console.log(`${this.name} hit you with ${this.weapon}`);
};

const Elf = function (name, typeOfCast) {
    this.race = 'Elf';
    this.name = name;
    this.language = 'Sindarin';
    this.typeOfCast = typeOfCast;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.castTheSpell = function () {
    console.log(`${this.name} casted the ${this.typeOfCast}!`);
};

const ork = new Ork('Dagra', 'Hammer');
const elf = new Elf('Callon', 'Light Cast');

ork.hit();
elf.speak();
elf.castTheSpell();
