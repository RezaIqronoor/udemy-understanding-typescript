"use strict";
// const userName = "Max";
// // userName = "Maximilian";
// let age = 30;
// age = 20;
// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }
// if (age > 20) {
//     var isOld = true;
// }
/**
 * This will work because var is assigned as global variable and can be
 * accessed even outside of the scope.
 */
// console.log(isOld);
// console.log(result);
/**
 * Arrow functions examples and variations.
 */
/**
 * This is the Default Parameters, you need to set it
 * from the last parameters or it won't work.
 */
// const add = (a: number, b: number = 1) => a + b;
// const printOutput: (a: number | string) => void = (output) =>
//     console.log(output);
// const button = document.querySelector("button");
// if (button) {
//     button.addEventListener("click", (event) => console.log(event));
// }
// printOutput(add(5));
/**
 * Spread Operators, taking the values from array or object to be
 * used where you like.
 */
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    firstName: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
/**
 * This is thre Rest Operators, to be able
 * to have a dynamic amount of arguments.
 */
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
/**
 * Object Destructuring, to pull out items from array
 * or objects. While Array follows the order of the items while
 * object follows the keyname instead.
 *
 * firstName: userName is to rename firstName key to userName
 */
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(userName, age);
