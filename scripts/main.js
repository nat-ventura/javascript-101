var name = prompt("what's your big ol name ugly?")

if (name.length >= 3) {
    console.log("Hell0o u with the short ass name");
} else {
    var greeting = ("Hello " + name + "!");
    console.log(greeting);
    console.log("The length is", greeting.length + ".");
}

// if you don't use var, a global variable is declared