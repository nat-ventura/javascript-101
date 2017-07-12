function gree(whome, hwat) {
    if (!whome) {
        whome = "little dogs";
    }
    return "oh hi. " + hwat + ' to you, ' + whome;
}

// null is null. NOT NULL is TRUE. (kind of crazy..)..
// recommend using pythontutor to see what is and what is NOT UNDEFINED

console.log(gree(null, "warmest welcome"));

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