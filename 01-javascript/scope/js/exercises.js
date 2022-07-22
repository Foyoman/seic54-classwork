/* WARMUP
document.addEventListener('DOMContentLoaded', function(event) {
    const leapYear = function() {
        const year = document.getElementById("yearValue").value;
        const message = ``;
        const newItem = document.createElement('li');
        newItem.innerText = message;
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
            message = `${year} is a leap year!`;
        } else {
            message = `${year} is NOT leap year!`;
        }
        document.querySelector('.output').appendChild(newItem);
        document.getElementById("yearValue").value = null;
    document.getElementById("generate").addEventListener("click", leapYear);
    }
})

const leapYear = function(year) {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYear(1997));
console.log(leapYear(1996));
console.log(leapYear(1900));
console.log(leapYear(2000));
*/

console.log(`poop`);
// The differences between var, let and const

// 0. const
// 1. let
// 2. (var)

// Scopes -- what information is visible/accessible at different points in your code.

// Global scope /////////////////////////////////////////////////

const globalMessage = 'Hello Cruel World';

const showGlobalMessage = function() {
    console.log('I can see the global message', globalMessage); // globalMessage is in the global scope.
};

showGlobalMessage();
console.log('Still global', globalMessage);

// Function scope ///////////////////////////////////////////////
const showLocalMessage = function() {
    const localMessage = 'Goodbye Cruel World';
    console.log('I can see the local message', localMessage);
};

showLocalMessage();
// console.log('I can see the local message', localMessage); // crash: localMessage is out of scope.

// ES2015 introduced block scope -- why? ////////////////////////

// var inside a block
if (1000 > 3) {
    if (1000 > 3) {
        var hotdogs = Infinity; // global variable
        console.log(hotdogs);
    }
}

console.log('How many hotdogs?', hotdogs); // still in scope

// let inside a block
if (1000 > 5) {
    let goldfish = 7; // block scope -- NOT global
    console.log(goldfish); // still in scope => 7
}

// console.log('How many goldfish?', goldfish); // crash: goldfish has gone out of scope

// const inside a block
if (1000 > 7) {
    const pies = 3; // block scope -- NOT global
    console.log(pies); // still in scope => 3
}

// console.log('How many pies?', pies); // crash: pies has gone out of scope

// Practical example: why was this added to JS //////////////////
const bros = ['Groucho', 'Harpo', 'Chico'];

for (var i = 0; i < bros.length; i++) {
    console.log(bros[i], 'Marx');
}

console.log('wtf does i still exist?', i);