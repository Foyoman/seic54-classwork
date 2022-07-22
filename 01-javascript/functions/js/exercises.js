const tellFortune = function(children, partnerName, geolocation, jobTitle) {
  console.log(`You will be a ${ jobTitle } in ${ geolocation }, and married to ${ partnerName } with ${ children } kids.`)
}

const calculateDogAge = function(puppyAge, humanAge) {
    doggyAge = puppyAge * 7;
    personAge = humanAge / 7;
    console.log(`Your doggie is ${ doggyAge } years old in human years and your human is ${ personAge } years old in dog years!`);
}

const calculateSupply = function(age, amountPerDay) {
    const deathAge = 99;
    const total = ( deathAge - age ) * 365.25 * amountPerDay;
    console.log(`You will need ${ Math.ceil(total) } to last you until the ripe old age of ${ deathAge }.`);
}

const calcCircumference = function(radius) {
    const circumference = 2 * radius * Math.PI;
    console.log(`The circumference is ${ circumference }.`);
}

const calcArea = function(radius) {
    const area = radius * radius * Math.PI;
    console.log(`The area is ${ area }.`);
}

const celsiusToFahrenheit = function(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    console.log(`${ celsius }°C is ${ fahrenheit }°F.`);
}

const fahrenheitToCelsius = function(fahrenheit) {
    const celsius = ( fahrenheit - 32 ) / 1.8;
    console.log(`${ fahrenheit }°F is ${ celsius }°C.`);
}

/*
const raindrops = function(num1) {
    if (Number.isInteger(num1 / 3) == true) {
        return "Pling";
    }
    if (Number.isInteger(num1 / 5) == true) {
        return "Plang";
    } 
    if (Number.isInteger(num1 / 7) == true) {
        return "Plong";
    }
    return num1;
}
*/

const raindrops = function(num) {
    let output = '';
    if (num % 3 === 0) {
        output = output + 'Pling';
    }
    if (num % 5 === 0) {
        output = output + 'Plang';
    }
    if (num % 7 === 0) {
        output = output + 'Plong';
    }
    if (output === '') {
        output = num;
    }
    return output;
}