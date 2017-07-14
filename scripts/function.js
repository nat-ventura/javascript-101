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

function wordHistogram(string) {
    hist = {}
    splits = string.split(" ")
    for (i=0; i < splits.length; i++) {
        if (splits[i] in hist) {
            hist[splits[i]] += 1;
        } else {
            hist[splits[i]] = 1;
        }
    }
    return hist;
}

console.log(wordHistogram("Hold up, they don't love you like I love you \nSlow down, they don't love you like I love you\nBack up, they don't love you like I love you"));