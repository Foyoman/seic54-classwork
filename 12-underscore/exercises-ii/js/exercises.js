console.log( _.VERSION );

// collections: arrays AND objects
const nums = _.range(1, 13);

// .each() ////////////////////////////////////////////////////////
_(nums).each(function (n, index, entireArray) {
    console.log(n, index, entireArray);
});

// .each() with an object /////////////////////////////////////////
const sales = {
    January: 15,
    February: 11,
    March: 3
};

// Note: value comes before key
_(sales).each(function (amount, month) {
    console.log(`In ${ month } the sales were ${ amount }.`)
});

// .map() /////////////////////////////////////////////////////////
const multiplyBy19 = function (a) {
    return a * 19;
};

const multiplesOf19 = _(nums).map(multiplyBy19);
console.log(multiplesOf19);

// .map() for objects /////////////////////////////////////////////
const salesInfo = _(sales).map(function (total, month) {
    return `${ total } sales in ${ month }.`
});
console.log(salesInfo);

// .reduce() //////////////////////////////////////////////////////
// const total = _(nums).reduce(function (a, b) {
//     return a + b;
// });
// console.log(total);

const total = _(nums).reduce(function (runningTotal, n) {
    console.log(`runningTotal: ${ runningTotal }, return: ${ runningTotal + n }`)
    return runningTotal + n;
});
console.log(total);

// .reduce() also works for objects ///////////////////////////////

///////////////////////////////////////////////////////////////////

// .find() ////////////////////////////////////////////////////////
const divisibleBy5 = function (n) {
    return n % 5 === 0;
};

const fivey = _(nums).find(divisibleBy5);
console.log(fivey);

// .filter() //////////////////////////////////////////////////////
const allFives = _(nums).filter(divisibleBy5);
console.log(allFives);

// .reject() //////////////////////////////////////////////////////
const notFives = _(nums).reject(divisibleBy5);
console.log(notFives);

// .pluck() ///////////////////////////////////////////////////////
const bros = [
    {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
    {name: 'Harpo', instrument: 'harp', disposition: 'angelic'},
    {name: 'Chico', instrument: 'piano', disposition: 'lecherous'}
];

// const instruments = [];
// for (let i = 0; i < bros.length; i++) {
//     instruments.push( bros[i].instrument );
// }
// console.log(instruments);

_(bros).pluck('instrument');

///////////////////////////////////////////////////////////////////
// exercises ii
console.log('exercises ii ///////////////////////////////////////')

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html

///////////////////////////////////////////////////////////////////

console.log(`1. Sort the people by 'uid'`)

const sortedUID = _(people).sortBy('uid');
console.log(sortedUID);

///////////////////////////////////////////////////////////////////

console.log(`2. Group the random words by the lower case version of their first letter`)

const firstLowerLetter = function (string) {
    return string[0].toLowerCase();
};

console.log( _(words).groupBy(firstLowerLetter) );

///////////////////////////////////////////////////////////////////

console.log(`3. Check to see if all the words have more than 3 characters`)

const moreThan3 = function (string) {
    return string.length > 3;
};

const allMoreThan3 = _(words).every(moreThan3);
console.log( allMoreThan3 );

///////////////////////////////////////////////////////////////////

console.log(`4. Check if some words are over twenty characters long`)

const moreThan20 = function (string) {
    return string.length > 20
};
const someMoreThan20 = _(words).some(moreThan20);
console.log(someMoreThan20);

///////////////////////////////////////////////////////////////////

console.log(`5. Get an array of all of the uids in people`)

const uids = _(people).pluck('uid');
console.log(uids);

///////////////////////////////////////////////////////////////////

console.log(`6. Find the person with the highest uid`)

const highestPerson = _(people).max('uid');
console.log(highestPerson);

///////////////////////////////////////////////////////////////////

console.log(`7. Return an object that says how many even numbers and how many odd numbers there are in numbers`)

const oddOrEven = function (n) {
    if (n % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    };
};

const oddEvenCounts = _(numbers).countBy(oddOrEven);
console.log( oddEvenCounts );

///////////////////////////////////////////////////////////////////

console.log(`8. Get three random numbers out of numbers`)

console.log( _(numbers).sample(3) );