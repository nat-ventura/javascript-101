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

// STRING JOIN

function strJoin(stringArray, sep) {
    return stringArray.reduce(function (accumulator, string) {
        return accumulator + sep + string;
    });
}

console.log(strJoin(['Hello', 'and', 'goodbye'], ' '));

// ACRONYM

function acronym (wordArray) {
    return wordArray.reduce( function (accumulator, current) {
        console.log(current);
        console.log(current[0]);
        return accumulator + current[0];
    }, "");
}

console.log(acronym(['dog','over','golf']));

// omg it totally worked, i just didn't realize it
// because dog was both the first word and the acronym
// print statements are my savior

// STRING MULTIPLY

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function stringMultiply(string, times) {
    
}