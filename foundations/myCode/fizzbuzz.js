
// when a user enters a number
const prompt = require('prompt-sync')();

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz to: "));

// loop from 1 to the entered number
// if the current number is divisible by 3 then print "Fizz"
// if the current number is divisible by 5 then print "Buzz"
// if the current number is divisible by 3 and divisible by 5 then print "FizzBuzz"
// Otherwise print the current number

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

