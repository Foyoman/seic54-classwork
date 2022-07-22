const children = 6;
const partnerName = 'Zoe';
const geolocation = 'London';
const jobTitle = 'Software Engineer';

const fortune = `You will be a ${ jobTitle} in ${ geolocation }, and married to ${ partnerName } with ${ children } kids.`;
console.log(fortune);

const currentYear = 2022;
const birthYear = 1999;

const ageBeforeBirthday = currentYear - birthYear - 1;
const ageAfterBirthday = currentYear - birthYear;

console.log(`They are either ${ ageBeforeBirthday } or ${ ageAfterBirthday }.`)

const age = 23;
const deathAge = 99;
const amountPerDay = 11; // hotdogs

const amountPerYear = amountPerDay * 365.25; // leap years
const yearsRemaining = deathAge - age;

const amountRequired = yearsRemaining * amountPerYear;
console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }.`)

const radius = 1;
const circumference = 2 * radius * Math.PI; // diameter * pi
console.log(`The circumference is ${ circumference }`);
const area = Math.PI * radius * radius; // pi * radius^2
console.log(`The area is ${ area }`);

const currentTemperature = 20; // celsius
const fahrenheit = currentTemperature * 1.8 + 32;
console.log(`${ currentTemperature }°C is ${ fahrenheit }°F`);

const celsius = (fahrenheit - 32) / 1.8; // precedence
console.log(`${ fahrenheit }°F is ${ celsius }°C.`);