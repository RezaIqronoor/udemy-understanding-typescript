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
/**
 * This function wants to return a proprety of an object that is passed as
 * a frist parameters using the second parameters
 * to make sure that the parametes ( object key ) does exist in the object that is being passed
 * use the keyword "keyof"
 */
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Max" }, "name");
/**
 * Generic Class, maybe you don't care what kind of type that you will use.
 * use this generic class.
 */
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, completeUntil) {
    /**
     * This makes courseGoal of type CourseGoal's properties optional.
     * So you don't have to initialize the object with each of the properties.
     * When returning, you must type case it to CourseGoal back.
     */
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
/**
 * Readonly makes the array locked, can't push nor pop.
 */
const names = ["Max", "Anna"];
// names.push("Manu");
//# sourceMappingURL=generics.js.map