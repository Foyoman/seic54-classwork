// 0. callbacks
// 1. promises: .then
// 2. await promises

// Promises are an evolution of callbacks.
// a way to handle or process data from an asynchronous process whenever that finishes (or an event occurs)

const fs = require('fs');

// A Promise wrapper around the above fs.readFile
const readFile = (filename) => {
	// resolve and reject are FUNCTIONS provided to you by Promise
	return new Promise((resolve, reject) => {
		// do a thing (read a file)
		// if that went well:
			// call resolve()
		// if that went badly:
			// call reject()
			fs.readFile(filename, 'utf-8', (err, content) => {
				if (err) {
					return reject(err); // invoke all the .catch callbacks
				}
				resolve(content); // invoke all the .then callbacks
			});
	});
	// read the file
	// return a promise
};

// Promises let us handle errors or success separately (in .catch and .then, respectively)
readFile('flintstones.txt').then((data) => {
	console.log(data);
});

// You can await the results of a promise IF the await is in an async function
const printFlintstones = async function () {
	const data = await readFile('flintstones.txt');
	console.log(data);
	console.log('the promise is now fulfilled');
};

printFlintstones();

///////////////////////////////////////////////////////////////////

const axios = require('axios');

// old school promises
axios.get('http://numbersapi.com/random/trivia').then(({data}) => {
	console.log(data);
});

// await:
const numberFact = async () => {
	const { data } = await axios.get('http://numbersapi.com/random/trivia');
	console.log(data);
};

numberFact();