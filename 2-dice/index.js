'use strict'

function dice(min, max) {
    const randomNumber = Math.floor((Math.random()*(max-min+1)+min));
    console.log(randomNumber)
}

dice(1,16)