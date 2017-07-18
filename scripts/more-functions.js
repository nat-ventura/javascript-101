// PRODUCT

function calc(totalSoFar, currentElement) {
    return totalSoFar * currentElement;
}

function product(array) {
    return array.reduce(calc, 1)
}

console.log(product([1,2,3,4]));