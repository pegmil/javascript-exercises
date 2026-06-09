// function favoriteAnimal(animal) {
//     return animal + " is my favorite animal!"

// }

// const message = favoriteAnimal('Llama')
// console.log(message)

// let sum = (a, b) => a + b;

// console.log("sum is: " + sum(1,2));

// let double = n => n*2;
// console.log("double: " + double(3));

// let sayHi = () => console.log("Hello!");

// sayHi();

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask("Do you agree?", 
//     () => console.log("You agreed"), 
//     () => console.log("You canceled the execution."));

// function add(a, b) {
//     return a + b;
// }

// function average(a, b) {
//     return add(a,b)/2;
// }

// let x = average(10,20);
// console.log(x);

function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
}

function lastLetter(str) {
    return str.at(-1);
}

// Master function to call all the other functions
function letsTest() {
    const add7num = add7(10);
    const num2 = multiply(3, 2);

    console.log("Add 7 to 10 gives: " + add7num); // 17
    console.log("multiplying 2 numbers gives: " + multiply(3, 2)); // 6

    console.log("capitalize abcd: " + capitalize("abcd"));
    console.log("capitalize ABCD: " + capitalize("ABCD"));
    console.log("capitalize aBcD: " + capitalize("aBcD"));
    
    console.log("last letter of abcd is: " + lastLetter("abcd"));

}

letsTest()
