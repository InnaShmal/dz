'use strict';

async function getProduct(id) {
    const resProduct = await fetch('https://dummyjson.com/products/' + id);
    return resProduct.json();
}

function customRace(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
            }
    })
}

async function race() {
    try {
        const response = await customRace([getProduct(1), getProduct(2)]);

        console.log(response);
    } catch (e) {
        console.error(e);
    }
}

race();
