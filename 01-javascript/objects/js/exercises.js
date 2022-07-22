/* warmup
const simonSays = function(input) {
    if (input.includes('?')) {
        return 'Sure.';
    } else if (input.includes('!')) {
        return 'Whatever!';
    } else if (input.trim() === "") {
        return 'Fine. Be that way!';
    } else if (input.toUpperCase() === input) {
        return 'Woah, chill out!';
    }
}

const simonSays = function(phrase) {
    let response = 'Whatever';

    if (phrase[phrase.length -1] === "?") {
        response = "Sure";
    } else if (phrase.trim() === '') {
        response = "Fine. Be that way!";
    } else if (phrase === phrase.toUpperCase()) {
        response = "Woah, chill out!";
    }

    return response;
}

console.log(simonSays('Wassup?'));
console.log(simonSays('Wassup!'));
console.log(simonSays(''));
console.log(simonSays('WASSUP'));
*/

const recipe = {
    title: `Mole`,
    servings: 2,
    ingredients: [`cinnamon`, `cumin`, `cocoa`]
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
};

const books = [
    {title: 'Fahrenheit 451', author: 'Ray Bradbury', alreadyRead: true}, 
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: false}
];

for (var i = 0; i < books.length; i++) {
    console.log(`${books[i].title} by ${books[i].author}`);
    bookInfo = `${books[i].title} by ${books[i].author}`;
    if (books[i].alreadyRead === true) {
        console.log(`You already read ${bookInfo}`)
    } else {
        console.log(`You still need to read ${bookInfo}`)
    };
};

const bttf = {
    title: 'Back to the Future',
    duration: 116,
    stars: [`Michael J. Fox`, 'Christopher Lloyd', "Crispin Glover"]
};

const fakemovie = {
    title: 'Poopy Scoop',
    duration: 420,
    stars: [`Poop`, 'Scoop', 'Donut']
};

const movieInfo = function(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}`);
};

movieInfo(bttf);
movieInfo(fakemovie);