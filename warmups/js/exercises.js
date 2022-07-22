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

const mumble = function (string) {
    let output = string.toUpperCase().split('');

    for (let i = 0; i < output.length; i++) {
        output[i] = output[i].padEnd(i+1, string[i]);
    }

    console.log(output.join('-'));
}

mumble('poop');
mumble('X'); // => 'X'
mumble('abc'); // => 'a-bb-ccc'
mumble('121'); // => '1-22-111'
mumble('!A 2'); // => '!-AA-   -2222'

const allergies = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128
}

const allergyScore = function(score) {
    const allergies = [];

    const scores = Object.keys(allergies);

    for (let i = scores.length; i >= 0; i--) {
        const allergenScore = Number(scores[i]);

        if (allergenScore <= score) {
            score -= allergenScore;

            allergies.push(allergenList[allergenScore]);
        }
        
    }
    return allergies;
}

allergyScore(26);  // => [ 'tomatoes', 'strawberries', 'peanuts' ]
allergyScore(132); // => [ 'cats', 'shellfish' ]
allergyScore(0);   // => [] 