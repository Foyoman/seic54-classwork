// setTimeout as a Promise

const holdUp = (duration) => {
	return new Promise((resolve) => {
		// do a thing
		// maybe call resolve
		// or 
		// maybe call reject 
		setTimeout(resolve, duration);
	})
};

// Alternatives:

// const holdUp = (duration) => new Promise((resolve) => {
// 	setTimeout(resolve, duration);
// });

// No curlies, no return: implicit return all the way done:
// const holdUp = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

// Make this code work:
holdUp(3000).then(() => {
	console.log('3 seconds have elapsed');
});