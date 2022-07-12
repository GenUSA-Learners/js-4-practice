console.log('Your JS file is linked!');

// Write your code below
let firstPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("First Promise")
	}, 3000);
})
