'use strict';

class Car {
    #make;
    #model;
    #run;

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get run() {
        return this.#run;
    }

    set run(value) {
        if (value < this.#run) {
            console.log('Пробег не может быть меньше текущего!')
        } else {
            this.#run = value;
        }
    }

    info() {
        console.log(`Car brand: ${this.#make}, Model: ${this.#model}, Car mileadge: ${this.#run}`)
    }
}

const car1 = new Car('Audi', 'S8', 1000);
console.log(car1.info())

car1.run = 1500;
console.log(car1.info())