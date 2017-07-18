// PRODUCT

function calc(totalSoFar, currentElement) {
    return totalSoFar * currentElement;
}

function product(array) {
    return array.reduce(calc, 1)
}

console.log(product([1,2,3,4]));

// TOTAL PRICE

var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
];

function total(productArray, fn, starter) {
    return productArray.reduce(function (tally, current) {
        return tally + current['price'];
    }, 0);
}

console.log(total(products));

// CHRIS EXAMPLE BUTTONS

var buttons = {
    scale: document.querySelector('[data-toggle-scale]'),
    rotate: document.querySelector('[data-toggle-rotate]')
};

var target = document.querySelector('[data-target]');

Object.keys(buttons).forEach(function (k) {
    buttons[k].addEventListener('click', function () {
        target.classList.toggle(k);
    })
})