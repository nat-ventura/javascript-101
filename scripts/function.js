// var phonebookDict = {
//     Alice: '703-493-1834',
//     Bob: '857-384-1234',
//     Elizabeth: '484-584-2923'
// }

// function lizPhone(phonebookDict) {
//     console.log(phonebookDict['Elizabeth']);
// }

// function addContact(phonebookDict, name, num) {
//     phonebookDict[name] = num;
//     console.log(phonebookDict);
// }

// function deleter(dict, name) {
//     phonebookDict[name] = "";
//     console.log(dict);
// }

// lizPhone(phonebookDict);
// addContact(phonebookDict, 'Kareem', '938-489-1234');
// deleter(phonebookDict, 'Alice');

// function letterHistogram(string) {
//     bigDict = {}
//     for (i=0; i < string.length; i++) {
//         if (string[i] in bigDict) {
//             bigDict[string[i]] += 1;
//         } else {
//             bigDict[string[i]] = 1;
//         }
//     }
//     return bigDict;
// }

// console.log(letterHistogram("trashcompactorhasishseller"));

// function wordHistogram(string) {
//     hist = {}
//     splits = string.split(" ")
//     for (i=0; i < splits.length; i++) {
//         if (splits[i] in hist) {
//             hist[splits[i]] += 1;
//         } else {
//             hist[splits[i]] = 1;
//         }
//     }
//     return hist;
// }

// console.log(wordHistogram("banana keys banana boat"));

var nums = [-1,2,-3,-4,5,-6,7,-8,-9,-10];

// var positivos = nums.filter(function(num) {
//     if (num > 0) {
//         return true;
//     }
// });

// console.log(positivos);

// var evies = nums.filter(function(num) {
//     if (num % 2 == 0) {
//         return true;
//     }
// });

// console.log(evies);

// var squares = [];

// function square(n) {
//     return n * n;
// }

// var squares = nums.map(square);

// console.log(squares);

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

// var coldCities = [];

// function isCold(city) {
//     // if (city["temperature"] < 70.0) {
//     //     return true;
//     // }

//     // return city["temperature"] < 70.0 

// }

// var coldCities = cities.filter((city) => {
//     return city["temperature"] < 70.0;
// });

// var cityNames = cities.map(function(city) {
//     return city["name"];
// });

// [1,2,3,4,5,6,7].forEach((num) =>{
//         console.log("my number is "+num)
//         if (num == 4){
//             console.log("hasjhdgahsgdjhagsjdhgasjhdg")
//         }
// });

// console.log(coldCities);

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var cityNames = cities.map(function(city) {
    return city["name"];
});

console.log(cityNames);