'use strict';

async function getProduct(id) {
    const resProduct = await fetch('https://dummyjson.com/products/' + id);
    return resProduct.json();
}

async function race() {
    try {
        const response = await Promise.race([getProduct(1), getProduct(2)]);

        console.log(response);
    } catch (e) {
        console.error(e);
    }
}

race();
