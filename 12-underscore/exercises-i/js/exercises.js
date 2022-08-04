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
// exercises i ////////////////////////////////////////////////////

console.log('exercises-i')

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
_(numbers).each(function (n) {
    console.log(n);
});

// Iterate through numbers and multiply each one of them by 5
const multiplyBy5 = function (a) {
    return a * 5;
};

const multipliedBy5 = _(numbers).map(multiplyBy5);
console.log(multipliedBy5);

const fives = _(numbers).map(function (n) {
    return n * 5
});
console.log(fives);

// Iterate through numbers and reduce it by adding them together
const summed = _(numbers).reduce(function (a, b) {
    return a + b;
});
console.log(summed);

const add = function (a, b) {
    return a + b;
};

const sum = _(numbers).reduce(add);
console.log(sum);

// Get an array of all of the people in people that have the username "E"
const ease = function (person) {
    return person.username === "E"
};

const peeple = _(people).filter(ease);
console.log(peeple);

const eUsers = _(people).where({username: "E"});
console.table(eUsers);

// Find the first object in people that has the id of 3
const idFree = function (person) {
    return person.id === 3;
};

const free = _(people).find(idFree);
console.log(free);

const user3 = _(people).findWhere({id: 3});
console.log(user3);

// Find the first person who has an age of less than 50
const notTooOld = function (person) {
    return person.age < 50;
};

const young = _(people).find(notTooOld);
console.log(young);

const youngPerson = _(people).findWhere(function (p) {
    return p.age < 50;
});
console.log(youngPerson);

// Get an array of all of the people with an age of over 60
const old = function (person) {
    return person.age > 60;
};

const oldies = _(people).filter(old);
console.log(oldies);

const seniors = _(people).reject(function (p) {
    return p.age < 60;
});
console.table(seniors);

// Remove all of the people with an age less than 40
const underFourty = function (person) {
    return person.age < 40;
};

const noYoungies = _(people).reject(underFourty);
console.log(noYoungies)

const adults = _(people).reject(function (p) {
    return p.age < 40;
});
console.table(adults);

// ## Remember!

// You have the [documentation!](https://underscorejs.org/)