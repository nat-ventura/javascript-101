// var nums = [-5, 3, -10, 2, 20, -30, 1];
// var positive = makeFilter(isPositive);

// function makeFilter(fn) {
//     return function (numArray) {
//         return numArray.filter(fn);
//     }
// }

// var negative = makeFilter(isNegative);
// makeFilter(isNegative)([-1, -2, 3, 4]);

// // just step through it-- play around and pull in "actual values"
// // this way you can see what javascript is "doing"
// // orrrr try python tutor
// // LEARN TO THINK LIKE THE COMPILER

// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];

// function coolCities(cityArray) {
//     return cityArray.filter(function (city) {
//         return isCool(city.temperature);
//     });
// }

// function get(propName) {
//     return function (obj) {
//         return obj[propName];
//     }
// }

// var getTemp = get('temperature');

// function isCoolerThan(threshold) {
//     return function(temp) {
//         return temp < threshold;
//         }
//     }

// // note that it's helpful to include an object's type in their variable names

// // function isCool(temp) {
// //     return temp < 70;


// var lessThan70 = isCoolerThan(70);

// function cityName(cityArray) {
//     return cityArray.map(get('name'));
// }


function calculateProduct(runningTotal, currentElement) {
    console.log('runningTotal: ' + runningTotal + ', currentElement:' + currentElement);
    return runningTotal * currentElement;
}

function product(numArray) {
    return numArray.reduce(calculateProduct, 1);
}

console.log(product([1, 2, 3, 4, 5]));

function total(productArray, fn, starter) {
    return productArray.reduce(function (tally, current) {
        return tally + current['price'];
    })
}

function strJoin(strs, sep) {
    return strs.reduce(function (tally, str) {
        if (tally == '') {
            return str;
        } else {
            return tally + sep + str;
        }
    }, '');
}

// OR

function strJoin2(strs, sep) {
    return strs.reduce(function (tally, str) {
        return tally + sep + str;
    });
}