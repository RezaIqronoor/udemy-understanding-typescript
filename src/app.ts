/**
 * Declaring Decoraters, it takes the class's constructor function as a parameter
 * 
 * This is a Decorator Factory function, you will be able to accept custom arguments
 * with this.
 */
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

/**
 * More useful decorators. 
 * This function takes template ( html string ) and hookId ( html element id )
 * to modify an existing html element by adding <h1> then changing
 * the <h1> content to name which is a property exist in class Person.
 */
function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    }
}

// @Logger("LOGGING - PERSON")
@WithTemplate('<h1>My Person Object<h1>', "app")
class Person {
    name = "Max";

    constructor() {
        console.log("Creating person object...");
    }
}

const pers = new Person();

console.log(pers);
