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

products.reduce( function(acc))