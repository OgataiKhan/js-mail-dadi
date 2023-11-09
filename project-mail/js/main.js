'use strict';

// 1. We define an array of allowed email addresses  
const allowedEmails = ['one@gmail.com', 'two@gmail.com', 'three@yahoo.it', 'four@gmail.com'];

// 2. We use a prompt to ask for the user's email address and save it as a variable 
const userEmail = prompt('Type your email address');

// 3. We define a variable that is "false" by default
let emailFound = false;

// 4. We use a for loop and an if condition to go through each value of the array and check whether it matches the user input. If such a value is found, the variable from point 3 is changed to "true"
for (let i = 0; i < allowedEmails.length; i++) {
    if (allowedEmails[i] === userEmail) {
        emailFound = true;
    }
}

// 5. We print different messages based on whether the variable is true or false
if (emailFound === true) {
    console.log(`${userEmail} is an allowed user`);
} else {
    console.log(`${userEmail} is NOT an allowed user`);
}