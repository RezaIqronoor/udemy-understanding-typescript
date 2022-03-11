"use strict";
var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Max", " Bob");
result.split(" ");
const fetchedUserData = {
    id: "ul",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
/**
 * Optional Chaining, it let's you to access a nested properties
 * without having a runtime error if said properties not exist.
 * Ex: if .job or .job.title not exist, the code would just yield undefined
 * rather than throw a runtime error.
 */
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = "";
/**
 * Nullish Coalescing, it tells you wether a variable is really
 * just null or undefined, not empty string or anything else.
 * Here if userInput is really just null or undefined then it will
 * yield true and "DEFAULT" will be called.
 */
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log("Name: " + emp.name);
//     /**
//      * Type Guard to check if a "privileges" property exist in the
//      * emp variable.
//      */
//     if ("privileges" in emp) {
//         console.log("Privileges: " + emp.privileges);
//     }
//     if ("startDate" in emp) {
//         console.log("Start Date: " + emp.startDate);
//     }
// }
// printEmployeeInformation({ name: "Manu", startDate: new Date() });
// class Car {
//     drive() {
//         console.log("Driving...");
//     }
// }
// class Truck {
//     drive() {
//         console.log("Driving a Truck...");
//     }
//     loadCargo(amount: number) {
//         console.log("Loading cargo... " + amount);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     /**
//      * Type Guard to check if vehicle variable is created ( instance of ) based of Truck class.
//      */
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// /**
//  * "type: 'bird'" here is called Dicrimated Unions, which goes the same way
//  * for horse.
//  * The use is that these two object has a same property that describe the said object
//  * which can be used when creating Union Type to check what kind of object
//  * does this variable is as per the example below in the switch statement inside moveAnimal function.
//  */
// interface Bird {
//     type: "bird";
//     flyingSpeed: number;
// }
// interface Horse {
//     type: "horse";
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case "bird":
//             speed = animal.flyingSpeed;
//             break;
//         case "horse":
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log("Moving with speed: " + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 200 });
// /**
//  * This is Type Casting, you can assign a specific type if Typescript cannot
//  * determine it on its own
//  * (!) means that you tell TS that this value will not be null.
//  * If you are not sure then do an if statement like the ex below.
//  */
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
// const userInputElement = document.getElementById("user-input");
// if (document.getElementById("user-input")) {
//     (userInputElement as HTMLInputElement).value = "Hi There!";
// }
// /**
//  * Index Properties, TLDR it tells you that you with this interface you can add any amount
//  * of object properties but the property name type must be or can be converted to string (ie: number). And the
//  * value of the property name must be a string.
//  * You can also add a separate other properties in interface but must adhere to the Index Properties, so no properties
//  * with number value.
//  */
// interface ErrorContainer { // { email: "Not a valid email", username: "Must start with a capital character"}
//     [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//     email: "Not a valid email",
//     username: "Must start with a capital character!"
// };
//# sourceMappingURL=app.js.map