"use strict";
/**
 * Generic provides some sort of type checking for the class
 * that is being used as a type. Ex: const promise.
 */
// const names: Array<string> = ["Max", "Manuel"];
// // names[0].split("");
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });
// promise.then(data => {
//     data.split("");
// });
/**
 * This Generics is saying, objA and objB is could be any type BUT it most probably
 * will be a different type so you take it and return the intersection of it.
 * No need to explicitly infer what T and U value could be.
 *
 * "extends" here is a Constraints which tell you that T and U could be any
 * object type, but it must be an object, not string or number.
 */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 elements";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
//# sourceMappingURL=app.js.map