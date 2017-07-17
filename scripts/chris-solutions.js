var nums = [-5, 3, -10, 2, 20, -30, 1];
var positive = makeFilter(isPositive);

function makeFilter(fn) {
    return function (numArray) {
        return numArray.filter(fn);
    }
}

var negative = makeFilter(isNegative);
makeFilter(isNegative)([-1, -2, 3, 4]);

// just step through it-- play around and pull in "actual values"
// this way you can see what javascript is "doing"
// orrrr try python tutor
// LEARN TO THINK LIKE THE COMPILER

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function coolCities(cityArray) {
    return cityArray.filter(function (city) {
        return isCool(city.temperature);
    });
}

function isCool(temp) {
    return temp < 70;

    function isCoolerThan(threshold) {
        return function(temp) {
            return temp < threshold;
        }
    }
}

var lessThan70 = isCoolerThan(70);