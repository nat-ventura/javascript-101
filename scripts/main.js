// function gree(whome, hwat) {
//     if (!whome) {
//         whome = "little dogs";
//     }
//     return "oh hi. " + hwat + ' to you, ' + whome;
// }

// null is null. NOT NULL is TRUE. (kind of crazy..)..
// recommend using pythontutor to see what is and what is NOT UNDEFINED

// console.log(gree(null, "warmest welcome"));

// var name = prompt("what's your big ol name ugly?")

// function printThing(name) {
//     var greeting = ("Hello " + name + "!");
//     console.log(greeting);
//     console.log("The length is", greeting.length + ".");
//     // printing is not a return result
// }

// if (name.length <= 3) {
//     console.log("Hell0o u with the short ass name");
// } else {
//     printThing(name);
// }

// if you don't use var, a global variable is declared

// HELLO YOU PART TWO

// function hello(name) {
//     if (name == undefined) {
//         name = "world";
//     }
//     console.log("Hello ", name + "!");
// }

// hello("dogs")

// MADLIB

// function madlib(name, subject) {
//     var newString = name + '\'s favorite subject in school is ' + subject + '.';
//     return newString
// }

// console.log(madlib('Natalie','dogs'));

// TIP CALCULATOR TWO

// function tipAmount(bill, service) {
//     var total = 0
//     if (service == 'good') {
//         total = 0.2 * bill + bill;
//     } else if (service == 'fair') {
//         total = 0.15 * bill + bill;
//     } else if (service == 'poor') {
//         total = 0.1 * bill + bill;
//     }
//     return total
// }

// console.log(tipAmount(100, 'good'))

// TIP CALCULATOR THREE

// function splitAmount(bill, service, guests) {
//     var total = 0;
//     if (service == 'good') {
//         total = 0.2 * bill + bill;
//     } else if (service == 'fair') {
//         total = 0.15 * bill + bill;
//     } else if (service == 'poor') {
//         total = 0.1 * bill + bill;
//     }
//     var guestBill = total / guests;
//     return guestBill;
// }

// console.log(splitAmount(40, 'fair', 2));

// LEETSPEAK

function leetMeBro(lilString) {
    var leetNums = "4361057"
    var leetable = "AEGIOST"
    var leeted = ""
    var found = false;
    lilString = lilString.toUpperCase()

    while (found != true);
        for (i = 0; i < lilString.length; i++) {
            for (j = 0; j < leetable.length; j++) {
                if (lilString[i] == leetable[j]) {
                    leeted = leeted + leetNums[j];
                    found = true;
                } else {
                    leeted = leeted + lilString[i];
                    found = true;
                }
            }
        }
}

console.log(leetMeBro("hehehe what's up tools"))