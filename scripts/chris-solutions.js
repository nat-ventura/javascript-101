var nums = [-5, 3, -10, 2, 20, -30, 1];
var positive = makeFilter(isPositive);

function makeFilter(fn) {
    return function (numArray) {
        return numArray.filter(fn);
    }
}

var negative = makeFilter(isNegative);
makeFilter(isNegative)([-1, -2, 3, 4]);