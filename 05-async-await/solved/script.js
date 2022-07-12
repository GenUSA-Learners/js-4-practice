console.log('Your JS file is linked!');

// Refactor the following code to use async..await

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location === 'Google') {
            resolve('Google says hi');
        } else {
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// COMMENT THIS OUT AND REWRITE USING ASYNC AWAIT
// async await is "syntactic sugar" -- simplifying the code and making your code easier to read

// makeRequest('Google').then(response => {
//     console.log('Response Received');
//     return processRequest(response);
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch (err => {
//     console.log(err);
// })

//define the function
async function doWork() {
    // the try holds... everything that could possibly fail
    try {
        const response = await makeRequest('Facebook');
        console.log('Response Received');
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (error){
        console.log(error);
    }
}

//call the function
doWork();
