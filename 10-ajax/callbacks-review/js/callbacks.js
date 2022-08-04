console.log('yay JS')

// Callbacks Review

// A callback function is a function passed to another function.
// The callback function GETS CALLED FOR YOU, later, at some point in time.

// Javascript is asynchronous

// Timers: A C B
console.log('A');
setTimeout(function () {
    console.log('B:  Time has passed');
}, 5000); // next tick
console.log('C');

// setTimeout( function, duration );

// jQuery's document ready: I III II
console.log('I')
$(document).ready(function () {
    console.log('II: the document is ready');
});
console.log('III');

// Event handlers: Groucho Chico AND THEN MAYBE Harpo (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
    console.log('Harpo');
});
console.log('Chico');

///////////////////////////////////////////////////////////////////////////////
// I am expect to understand this /////////////////////////////////////////////

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Traditional JS technique:
// How do we console.log() these colours individually;
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// Ruby:
// colors.each do |color|
//     puts color
// end

// ES5:
colors.forEach(function (color) {
    console.log('called with', color);
});

// DIY:
// const each = function (array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// };

// each(colors, function (color) {
//     console.log('here is a color', color);
// });