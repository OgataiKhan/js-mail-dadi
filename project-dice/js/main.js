'use strict';

// 1. We generate a random integer from 1 to 6 for the user and save it as a variable
// 2. We generate a random integer from 1 to 6 for the computer and save it as a variable
const userRoll = Math.floor(Math.random() * 6) + 1;
const computerRoll = Math.floor(Math.random() * 6) + 1;

console.log(`You rolled a ${userRoll}.`);
console.log(`The computer rolled a ${computerRoll}.`);

// 3. We use an if condition to print a different message based on whether the user wins, loses, or ties
if (userRoll > computerRoll) {
    console.log('You WIN!');
} else if (computerRoll > userRoll){
    console.log('The computer wins.');
} else {
    console.log('You TIE.');
}