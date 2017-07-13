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

// PRINT NUMBERS

// function printNumbersOne(start, end) {
//     console.log("print numer one!")
//     for (var i=start; i < end + 1; i++) {
//         console.log(i);
//     }
// }

// function printNumbersTwo(start, end) {
//     var i = start;
//     while (i < end + 1) {
//         console.log(i);
//         i++;
//     }
// }

// printNumbersOne(1,10);
// printNumbersTwo(1,10);

// PRINT A SQUARE

// function printSquare(size) {
//     for (var j=0; j < size; j++) {
//         console.log("*".repeat(size));
//     }
// }

// printSquare(5);

// PRINT A BOX

// function printBox(width, height) {
//     console.log("hello");
//     for (var i = 0; i < height + 2; i++) {
//         if (i == 0 || i == height + 1) {
//             console.log("*".repeat(width));
//         } else {
//             console.log("*" + " ".repeat(width - 2) + "*");
//         }
//     }
// }

// printBox(5, 7);

//  PRINT A BANNER

// function printBanner(text) {
//     for (i=0; i < 4; i++) {
//         if (i == 0 || i == 3) {
//             console.log("*".repeat(text.length + 4));
//         } else if (i == 2) {
//             console.log("* " + text + " *");
//         }
//     }
// }

// printBanner("myellow this is my banner");

// FACTOR A NUMBER

// function factors(bigNum) {
//     var factorList = [1, bigNum];
//     if (bigNum % 2 == 0) {
//         factorList.push(2);
//         var fact = bigNum / 2;
//         while (fact > 2) {
//             factorList.push(fact);
//             fact = fact / 2;
//         }
//     } else if (bigNum % 3 == 0) {
//         factorList.push(3);
//         var fact = bigNum / 3;
//         while (fact > 3) {
//             factorList.push(fact);
//             fact = fact / 3;
//         }
//     }
//     // var i = 1;
//     // while (i < factorList.length) {
//     //     var j = i;
//     //     while (j > 0 && factorList[j] < factorList[j-1]) {
//     //         factorList[j], factorList[j-1] = factorList[j-1], factorList[j];
//     //         j += 1;
//     //     }
//     //     i += 1;
//     }

//     console.log(factorList);
// }

// factors(12);

// tip again

// if (!serviceLevel) {
//     serviceLevel = 'good';
// }
// serviceLevel = serviceLevel || 'good';
// }

// function tipAmount(bill, service) {
//     // if (!serviceLevel) {
//     //     throw new Error('Value Error: pls pass in a string as service level');
//     // }
//     // here we're creating an error-- bein noisy, which is good

//     var tip = 0;
//     var serviceLevels = {
//         'good': .2,
//         'fair': .15,
//         'bad': .1,
//         'poor': .05
//     }

// }

// // CAESAR CIPHER

function cipher(string, offset) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var ciphered = "";
    for (var i=0; i < string.length; i++) {
        for (var j=0; j < alphabet.length; j++){
            if (string[i] == alphabet[j]) {
                if (j + offset > 26) {
                    ciphered = ciphered + alphabet[(j + offset) % 26];
                } else if (j - offset < 0) {
                    ciphered = ciphered + alphabet[26 + (j - offset)];
                } else {
                    ciphered = ciphered + alphabet[j];
                }
            } else {
                ciphered = ciphered + string[i];
            }
        }
    }
}

console.log(cipher("i'm so fun", 4))

// LEETSPEAK

// function leetMeBro(lilString) {
//     var leetNums = "4361057"
//     var regularLetters = "AEGIOST"
//     var leeted = ""
//     lilString = lilString.toUpperCase()

//     for (word in lilString) {
//         for (i=0; i < word.length; i++) {
//             if (word[i] in regularLetters) {
//                 for (j=0; j < leetNums.length; j++) {
//                     if (word[i] == regularLetters[j]) {
//                         leeted = leeted + leetNums[j];
//                     }
//                 }
//             } else {
//                 leeted = leeted + word[i];
//             }
//         }
//     }
//     return leeted;
// }

// console.log(leetMeBro("string"));