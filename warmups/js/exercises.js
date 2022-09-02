/*
const eshays = function(str) {
    const words = str.split(' ');
    let newString = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = '';
        if (word.length > 1) {
            newWord = word.slice(1, word.length) + word[0] + 'ays';
        }
        if (word.length === 1) {
            newString.push(word);
        }
        newString.push(newWord);    
    }
    return newString.slice(0, newString.length - 1).join(' ');
}

console.log(eshays("Pig Latin is cool !")); // => "igPay atinLay siay oolcay !"
console.log(eshays("When do we get back from break ?")); // => "henWay oday eway etgay ackbay romfay reakbay ?"
console.log(eshays("DRY code is good code .")); // => "RYDay odecay siay oodgay odecay ."

const pigLatin = function (phrase) {
    // Break up phrase into words array.
    const words = phrase.split(' ');
    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        // Pull current word from array
        let word = words[i];
        // Skip word if punctuation
        if (word !== '!' && word !== '?' && word !== '.') {
            word = word + word[0] + 'ay';
            words[i] = word.substring(1); // remove first character
        }
    }
    // Convert array back into string then return
    return words.join(' ');
}

const timeConvert = function(time) {
    const newTime = time.split('');
    let hours = Number(newTime[0] + newTime[1]);
    const restOfTime = hours + newTime.slice(2, -2).join('');
    if (hours === 12  && newTime[newTime.length -2 === 'A']) {
        hours = '00'
        return hours + restOfTime;
    }
    if (hours !== 12) {
        if (newTime[newTime.length -2] === 'P') {
            hours += 12;
        }
        if (hours < 10) {
            return '0' + restOfTime;
        }
        return restOfTime;
    }
    return restOfTime;;
}

console.log(timeConvert('10:14:15PM'));
console.log(timeConvert('04:21:58AM'));
console.log(timeConvert('12:29:28PM'));
console.log(timeConvert('12:29:28AM'));
*/

// const planTrip = function(temp, rain) {
//     const forecast = {
//         'monday': { 'temperature': 20, 'rain': 12 },
//         'tuesday': { 'temperature': 25, 'rain': 6 },
//         'wednesday': { 'temperature': 27, 'rain': 24 },
//         'thursday': { 'temperature': 32, 'rain': 65 },
//         'friday': { 'temperature': 18, 'rain': 0 },
//         'saturday': { 'temperature': 26, 'rain': 0 },
//         'sunday': { 'temperature': 27, 'rain': 14 }
//     }; 
//     const days = Object.keys(forecast);
//     let suitableDays = [];
//     for (let i = 0; i < days.length; i++) {
//         if (temp <= forecast[days[i]].temperature && rain >= forecast[days[i]].rain) {
//             suitableDays.push(days[i]);
//         }        
//     }
//     if (suitableDays == 0) {
//         console.log(`No suitable days.`);
//     } else if (suitableDays.length == 1) {
//         console.log(`${suitableDays}`);
//     } else {
//         console.log(`${suitableDays.slice(0, suitableDays.length -1).join(', ')} and ${suitableDays[suitableDays.length - 1]}`);
//     }
// }

// planTrip(25, 30); 
// // => "tuesday, wednesday, saturday and sunday"

// planTrip(18, 65); 
// // => "monday, tuesday, wednesday, thursday, friday, saturday and sunday"

// planTrip(25, 0); 
// // => "saturday"

// planTrip(-1, -1); 
// // => "No days suitable."

/*
    const forecast = {
        'monday': { 'temperature': 20, 'rain': 12 },
        'tuesday': { 'temperature': 25, 'rain': 6 },
        'wednesday': { 'temperature': 27, 'rain': 24 },
        'thursday': { 'temperature': 32, 'rain': 65 },
        'friday': { 'temperature': 18, 'rain': 0 },
        'saturday': { 'temperature': 26, 'rain': 0 },
        'sunday': { 'temperature': 27, 'rain': 14 }
    }; 
*/

// const prizePicker = function () {
//     let prizes = [ "🚗 new car", "🌴 holiday", "🥁 drum machine" ];
//     let win = Math.floor(Math.random() * prizes.length);
//     console.log(`You win a ${prizes[win]}!`);
//     prizes.splice(win, 1);
//     console.log(prizes);
// }

// let prizePool = [ "🚗 new car", "🌴 holiday", "🥁 drum machine" ];
// const prizePicker = function (prizes) {
//     if (prizes.length === 0) return "❌ No prizes left";
//     const prizeIndex = Math.floor(Math.random() * prizes.length);
//     const prizeDrawn = prizes.splice(prizeIndex, 1);
//     console.log(`You win a ${prizeDrawn[0]}!`);
// };

// const array1 = [2, 6.4, 3];
// const array2 = [3, 3.6, 2];
// const array3 = [10, 18, 47];

// const sumSomeArray = function (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];         
//     }
// }

// const sumSomeArrays = function(array1, array2) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < array1.length; i++) {
//         sum1 += array1[i];            
//         sum2 += array2[i];
//     }
//     return sum1 + sum2;
// }; // wrong - doesn't account for the length of array2

// console.log(sumSomeArrays(array1, array2)) // => 20

// const sumSomeMoreArrays = function() {
//     let sum = 0;
//     let sumTotal = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         let array = arguments[i];
//         for (let j = 0; j < array.length; j++) {
//             sum += array[j];
//         }
//         sumTotal += sum;
//     }
//     return sum;
// };

// console.log(sumSomeMoreArrays(array1, array2, array3));

// const mumble = function(str) {
//     const string = str.split('');
//     let newString = [];
//     for (let i = 0; i < string.length; i++) {
//         const letter = string[i];
//         // newString.push(letter.repeat(i+1));
//         const newLetters = [];
//         newLetters.push(letter.toUpperCase());
//         newLetters.push(letter.repeat(i));
//         const letterJoined = newLetters.join('');
//         newString.push(letterJoined);
//     }
//     console.log(newString.join('-'));
// }

// const mumble = function (string) {
//     let output = string.toUpperCase().split('');

//     for (let i = 0; i < output.length; i++) {
//         output[i] = output[i].padEnd(i+1, string[i]);
//     }

//     console.log(output.join('-'));
// }12345

// mumble('poop');
// mumble('X'); // => 'X'
// mumble('abc'); // => 'a-bb-ccc'
// mumble('121'); // => '1-22-111'
// mumble('!A 2'); // => '!-AA-   -2222'

// const allergies = {
//     eggs: 1,
//     peanuts: 2,
//     shellfish: 4,
//     strawberries: 8,
//     tomatoes: 16,
//     chocolate: 32,
//     pollen: 64,
//     cats: 128
// }

// const allergyScore = function(score) {
//     const allergies = [];

//     const scores = Object.keys(allergies);

//     for (let i = scores.length; i >= 0; i--) {
//         const allergenScore = Number(scores[i]);

//         if (allergenScore <= score) {
//             score -= allergenScore;

//             allergies.push(allergenList[allergenScore]);
//         }
        
//     }
//     return allergies;
// }

// allergyScore(26);  // => [ 'tomatoes', 'strawberries', 'peanuts' ]
// allergyScore(132); // => [ 'cats', 'shellfish' ]
// allergyScore(0);   // => [] 

// const countingValleys = function (string) {
//     let altitude = 0
//     let valleys = 0
//     str = string.split('')
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'U') {
//             altitude++;
//         } else if (str[i] === 'D') {
//             if (altitude === 0) {
//                 valleys++;
//             }
//             altitude--;
//         }
//     }
//     console.log(valleys);
// }

// const reverse = function (arr) {
//     let reversed = [];
//     for (let i = arr.length -1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// };

// const meFlatten = function (arr) {
//     let flattened = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 1 && Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 flattened.push(arr[i][j]);
//             }
//         } else {
//             flattened.push(arr[i]);
//         }
//     }
//     return flattened;
// }

// // jacqui's solution
// const flatten = function (arr) {
//     const flattened = [];
//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             flattened.push(...flatten(element));
//             // can do flattened.push(...element) if only one level deep
//         } else {
//             flattened.push(element);
//         }
//     });

//     return flattened;
//     // ...or you could just use .flatten()
// };

// const grainsOnSquare = function (n) {
//     if (n === 1) {
//         return n;
//     };
//     return grainsOnSquare(n - 1) * 2;
// };

// const grainsOnSquares = function (i = 1) {
//     if (i > 64) {
//         return;
//     };
//     console.log(`Square ${i}: ${grainsOnSquare(i)}`);
//     return grainsOnSquares(i + 1);
// };

// const grainsOnBoard = function () {
//     let i = 1;
//     let sum = 0;
//     const total = function (i) {
//         if (i > 64) {
//             return `The total number of grains is ${sum}`;
//         }
//         sum += grainsOnSquare(i);
//         return total(i + 1);
//     };
//     return total(i);
// };

// const recursiveLetter = function (string) {
//     str = string.split(' ').join('').toLowerCase();
//     let i = str.length - 1;
//     let letter = str[i];
//     const mostFrequent = function (i) {
//         if (i < 0) {
//             return letter;
//         }
//         if (string.split(str[i]).length > string.split(letter).length) {
//             letter = str[i];
//         };
//         return mostFrequent(i - 1);
//     }
//     return mostFrequent(i);
// };

// const recurringLetter = function (sentence) {
//     // lowercase the sentence to ignore case
//     sentence = sentence.toLowerCase();
//     // this object will track character counts
//     const counts = {};
//     // loop through sentence and update character counts
//     _(sentence).each(function (character) {
//         // set character count to 1 if it hasn't been added before
//         if (counts[character] === undefined) {
//             counts[character] = 1;
//         // otherwise, increase its count by 1
//         } else {
//             counts[character]++;
//         }
//     });
//     // finds "max" based on the return value of callback function
//     return _(sentence).max(function (character) {
//         return counts[character];
//     });
// }

// const capitalizeLetter = function (sentence, letter) {
//     return _(sentence).reduce(function (output, char) {
//         // capitalize character if its the provided letter
//         if (char === letter) {
//             char = char.toUpperCase();
//         }
//         // add character to the output
//         return output += char;
//     }, ''); // start with an empty string
// }

// const tinder = function (n) {
//     let splitNum = String(n).split("").map(Number);
//     if (n < 10) {
//         return n;
//     } else {
//         return tinder(splitNum.reduce(
//             (a, b) => a + b
//         ));
//     };
// };

// const digitalRoot = function (num) {
//     // convert num into array of digits
//     const digits = String(num).split('').map(Number);
//     // sum digits in array
//     const sum = digits.reduce(function (digit, accumulator) {
//         return digit + accumulator;
//     });
//     // recursive magic
//     if (sum < 10) {
//         return sum;
//     };

//     return digitalRoot(sum);
// }

// const pairwise = function (arr, n) {
//     let sum = 0;
//     let indices = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === n) {
//                 console.log(`There is a pair at indices: [${arr.indexOf(arr[i])}, ${arr.indexOf(arr[j])}]`)
//                 indices.push(arr.indexOf(arr[i]), arr.indexOf(arr[j]))
//                 unique = [... new Set(indices)];
//                 sum = unique.reduce ((a, b) => a + b);
//                 // console.log(i, j)
//             }
//         }
//     }
//     console.log(sum);
// };

// pairwise([7, 9, 11, 13, 15], 20); // => 6
// pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10); // => 11
// pairwise([2, 18, 24, 7, 18, 4, 21], 25);

// const checkNumber = (number) => {
//     let digits = number.split('');
//     // If the phone number has any non-numerals in it they should be removed/ignored
//     digits = cleanNumber(digits);
//     // If the phone number is 11 digits and the first number is 1 trim the 1 and use the first 10 digits
//     // If the phone number is 11 digits and the first number is not 1 then it is an invalid number
//     digits = elevenCheck(digits);
//     // If the phone number is 10 digits long it is valid; if not it is invalid
//     digits = tenCheck(digits);

//     return formatNumber(digits.join(''));
// }

// const cleanNumber = (digits) => {
//     const validChars = '123456789'.split('')
//     return digits.filter(digit => validChars.find(char => char === digit) === undefined);
// }

// const elevenCheck = (digits) => {
//     if (digits.length === 11) {
//         if (digits[0] === '1') {
//             digits.shift();
//         } else {
//             digits = '0000000000';
//         }
//     }
//     return digits;
// }

// const tenCheck = (digits) => {
//     return digits.length === 10 ? digits : '0000000000';
// }

// const formatNumber = (digits) => {
//     const first = digits.substring(0, 3);
//     const second = digits.substring(0, 6);
//     const third = digits.substring(6);
//     return `(${first} ${second}-${third})`;
// }

// const collatz = (n, steps = 0) => {
//     if (n === 1) {
//         return `n === 1. It took ${steps} steps to reach 1.`;
//     }
//     if (n % 2 === 0) {
//         steps ++;
//         return collatz(n / 2, steps);
//     } else {
//         steps ++;
//         return collatz(3 * n + 1, steps);
//     }
// }

// console.log(collatz(1))
// console.log(collatz(2))
// console.log(collatz(3))

// const collats = (number) => {
//     let count = 0;

//     console.log('starting from: ', number);

//     while (number !== 1) {
//         if (number % 2 === 0) {
//             number /= 2;
//         } else {
//             number = number * 3 + 1;
//         }
//         count++;
//         console.log(`step ${count}: ${number}`);
//     }

//     return count;
// }

// const collatzRecursive = (number, count = 0) => {
//     if (number === 1) return count;
    
//     console.log(`step ${count}: ${number}`)

//     if (number % 2 === 0) {
//         return collatzRecursive(number / 2, count + 1);
//     } else {
//         return collatzRecursive(number * 3 + 1, count + 1)
//     }
// }

// const collatzRecursiveTernary = (n, count = 0) => {
//     if (n === 1) return count;

//     console.log(`step ${count}: ${n}`);

//     return collatzRecursiveTernary(n % 2 === 0 ? n / 2 : n * 3 + 1, count + 1);
// }

// console.log('isogram');

// const isogram = (word) => {;
//     return !/(\w).*\1/i.test(word);
// };

// console.log(isogram("Dermatoglyphics")) // true;
// console.log(isogram("isogram")) // true;
// console.log(isogram("aba")) //false;
// console.log(isogram("moOse")) // false,;
// console.log(isogram("isIsogram")) // false;
// console.log(isogram("")) // true);

// console.log('isIsogram');

// const isIsogram = (word) => {;
//     word = word.toUpperCase();
//     const recurringChars = {};

//     for (let i = 0; i < word.length; i++) {;
//         const char = word[i];

//         if (recurringChars[char]) return false;

//         recurringChars[char] = 'anything';
//     };

//     return true;
// };

// console.log(isIsogram("Dermatoglyphics")) // true;
// console.log(isIsogram("isogram")) // true;
// console.log(isIsogram("aba")) //false;
// console.log(isIsogram("moOse")) // false,;
// console.log(isIsogram("isIsogram")) // false;
// console.log(isIsogram("")) // true);

// console.log('logram');

// const _ = require('underscore');

// const logram = (word) => {;
//     return _.uniq(word.toLowerCase()).length === word.length;
// };

// console.log(logram("Dermatoglyphics")) // true;
// console.log(logram("isogram")) // true;
// console.log(logram("aba")) //false;
// console.log(logram("moOse")) // false,;
// console.log(logram("isIsogram")) // false;
// console.log(logram("")) // true);

// console.log('setsogram');

// const setsogram = (word) => {;
//     return new Set(word.toLowerCase()).size === word.length;
// };

// console.log(setsogram("Dermatoglyphics")) // true;
// console.log(setsogram("isogram")) // true;
// console.log(setsogram("aba")) //false;
// console.log(setsogram("moOse")) // false,;
// console.log(setsogram("isIsogram")) // false;
// console.log(setsogram("")) // true);

// const simpleSymbols = str => {
//     str = '=' + str + '=';

//     for (let i = 1; i < str.length - 1; i++) {
//         const currChar = str[i];
//         const prevChar = str[i - 1];
//         const nextChar = str[i + 1];
//         // if currChar is alphabetical...
//         if (currChar.match(/[a-zA-Z]/)) {
//             if (prevChar != '+' || nextChar != '+') {
//                 return String(false);
//             }
//         }
//     }

//     return String(true);
//  }

// console.log(simpleSymbols("++d+===+c++==a"))
// // expect to return false
// console.log(simpleSymbols("++d+===+c++==d"))
//  // expect to return false
// console.log(simpleSymbols("++d+===+c++==+a+=="))
// // // expect to return true

// const simpleSymbolsRegex = str => (!('=' + str + '=').match(/([^+][a-zA-Z]|[a-zA-Z][^+])/)).toString();

// console.log(simpleSymbolsRegex("++d+===+c++==a"))
// // expect to return false
// console.log(simpleSymbolsRegex("++d+===+c++==d"))
//  // expect to return false
// console.log(simpleSymbolsRegex("++d+===+c++==+a+=="))
// // // expect to return true

// const caesar = (str, num) => {
//     const letters = [
//         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//     ]

//     splitStr = str.toLowerCase().split('');
//     const newStr = [];
//     splitStr.forEach((letter) => {
//         if (letter.match(/[a-z]/)) {
//             indexOfLetter = letters.indexOf(letter);
//             newIndex = indexOfLetter + num
//             if (newIndex > 26) {
//                 newIndex -= 26;
//             }
//             newStr.push(letters[newIndex])
//         } else {
//             newStr.push(letter)
//         }
//     })
//     return newStr.join('');
// }

// console.log(caesar("Zoel is great!!!", 3))

// const sepStr = (str) => {
//     const wordsSplit = str.split(' ');
//     const wordCount = wordsSplit.length;
//     const longestWord = wordsSplit.reduce((a, b) => {
//         return a.length > b.length ? a : b;
//     })
//     const wordsArray = [];
//     for (let i = 0; i < longestWord.length; i++) {
//         wordsArray[i] = [];
//         for (let j = 0; j < wordCount; j++) {
//             wordsArray[i][j] = wordsSplit[j] ? wordsSplit[j][i] ? wordsSplit[j][i] : '' : ''
//         }
//     };
//     return wordsArray;
// }

// console.table(sepStr('Just Live Life Man'))
// console.table(sepStr("The Mitochondria is the powerhouse of the cell"))
// console.table(sepStr("I love coding so much I asked myself - what if the word count was higher than the length of the longest word?"))

// const happyNumbers = (num, steps) => {
//     if (num === 1) {
//         return true;
//     }
//     numSplit = String(num).split('').map((num) => Number(num));
//     sumOfSquares = numSplit.map((num) => num**2).reduce((a, b) => {
//         return a + b;
//     });
//     return happyNumbers(sumOfSquares);
// }

// console.log(happyNumbers(7));
// console.log(happyNumbers(49));
// console.log(happyNumbers(97));
// console.log(happyNumbers(130));
// console.log(happyNumbers(10));
// console.log(happyNumbers(1));

// // console.log(happyNumbers(8))

// const happyChappy = {
//     isHappy: function (number) {
//         // start with empty set
//         const set = new Set([number]);
//         // loop while number is not equal to 1
//         while (number !== 1) {
//             // apply algorithm
//             number = this.sumSquare(number);
//             // add new number to SET
//             const prevSize = set.size;
//             set.add(number);
//             // check if size of set has changed
//             if (set.size === prevSize) {
//                 // if size of set has not changed, return false
//                 return false;
//             }
//         }
//         return true;
//     },
    
//     sumSquare: function (number) {
//         // suppose we have array of its squared digits
//         return this.squareDigits(number).reduce((prev, curr) => prev + curr);
//     },

//     squareDigits: function (number) {
//         // needs to convert number into array of its squared digits
//         // convert number into string
//         number = number.toString();
//         // split the string on every character 
//         const StringyDigits = number.split('');

//         // map method to convert each stringy charcter into a number and square it
//         return StringyDigits.map(stringyDigit => Number(stringyDigit) * Number(stringyDigit));
//     }
// }

// console.log(happyChappy.isHappy(7)); // => true
// console.log(happyChappy.isHappy(3)); // => false

// vowel count
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// const firstNonRepeat = (str) => {
//     const splitStr = str.toLowerCase().split('');
//     for (let i = 0; i < splitStr.length; i++) {
//         const restOfWord = [...splitStr.slice(0, i), ...splitStr.slice(i + 1)];
//         if (!restOfWord.includes(splitStr[i])) {
//             return str[i]; 
//         }
//     }
//     return '';
// }

// console.log(firstNonRepeat('rooster')) // => "s"
// console.log(firstNonRepeat("minimal")) // => "n"
// console.log(firstNonRepeat("xoxo")) // => ""
// console.log(firstNonRepeat("Bob")) // => "o"
// console.log(firstNonRepeat("sTreSS")) // => "T"

// const fnrLoden = (string) => {
//     const charArray = string.split('');

//     const charCounts = {};

//     charArray.forEach( char => {
//         if (charCounts[char] === undefined) {
//             charCounts[char] = 1;
//         } else {
//             charCounts[char]++;
//         }
//     });

//     for (let char of charArray) {
//         if (charCounts[char] === 1) {
//             return char;
//         }
//     }
    
//     return '';
// }

// console.log(fnrLoden('rooster'));
// console.log(fnrLoden('minimal'));
// console.log(fnrLoden('xoxo'));
// console.log(fnrLoden('Bob'));
// console.log(fnrLoden('sTreSS'));

const incrementString = (str) => {
    const numArray = str.match(/[0-9]/g);
    if (numArray) {
        const num = Number(numArray.join(''));
        const incrementedNum = num + 1;
        if (String(incrementedNum).length > String(num).length && numArray[0] === '0') {
            return str.slice(0, -String(incrementedNum).length) + (incrementedNum);
        }
        return str.slice(0, -String(num).length) + (incrementedNum);
    }
    return str + 1;
}

console.log(incrementString("foo"));      // => "foo1"
console.log(incrementString("foobar23")); // => "foobar24"
console.log(incrementString("foo0042"));  // => "foo0043"
console.log(incrementString("foo9"));     // => "foo10"
console.log(incrementString("foo099"));   // => "foo100"
console.log(incrementString("foo00099")); // => "foo00100"

console.log('loden')

function incrementLoden(string) {
    let numberIndex;
    // loop backwards through string
    for (let i = string.length - 1; i >= 0; i--) {
        const char = string[i];
        // for each character, check if its a number
        if (isNaN(Number(char))) {
            // if not a number, break out of loop
            break;
        }
        // if number, store index
        numberIndex = i;
    }

    if (numberIndex === undefined) return string + 1;

    // break up our string into word and number components 
    let endNumber = string.slice(numberIndex);
    string = string.slice(0, numberIndex);

    const digitCount = endNumber.length;
    
    // convert endNumber into a number and add 1 
    endNumber = Number(endNumber) + 1;

    endNumber = (String(endNumber)).padStart(digitCount, '0')

    // join endNumber back onto string and return
    return string + endNumber
    
}

console.log(incrementLoden('foo123'));
console.log(incrementLoden("foo"));
console.log(incrementLoden("foobar23"));
console.log(incrementLoden("foo0042"));
console.log(incrementLoden("foo9"));
console.log(incrementLoden("foo099"));
console.log(incrementLoden("foo00099"));