console.log('poop');

const greaterNum = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};

console.log(`The greater number of 420 and 69 is ${greaterNum(420, 69)}`);
console.log(`The greater number of 420 and 69 is ${greaterNum(80085, 1337)}`);

const helloWorld = function(lang) {
    if (lang === 'en') {
        return 'Hello, World';
    } else if (lang === 'es') {
        return 'Hola, Mundo';
    } else if (lang === 'fr') {
        return 'Salut, Monde'; 
    } else {
        return 'Hello, world';
    }
};

console.log(helloWorld('en'));
console.log(helloWorld('es'));
console.log(helloWorld('fr'));

const assignGrade = function(num) {
    if (num >= 90) {
        return `A`;
    } else if (num >= 80) {
        return `B`;
    } else if (num >= 70) {
        return `C`;
    } else if (num >= 60) {
        return `D`;
    } else if (num >= 50) {
        return `E`;
    } else {
        return `F`;
    }
};

console.log(assignGrade(91));
console.log(assignGrade(81));
console.log(assignGrade(71));
console.log(assignGrade(61));
console.log(assignGrade(51));
console.log(assignGrade(41));

const pluralise = function(noun, number) {
    if (number === 1) {
        return `${number} ${noun}`;
    } else {
        return `${number} ${noun}s`;
    }
}

console.log(pluralise('dog', 69));
console.log(pluralise('alpaca', 1));