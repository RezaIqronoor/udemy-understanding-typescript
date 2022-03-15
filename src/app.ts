/**
 * Declaring Decoraters, it takes the class's constructor function as a parameter
 * The declaration of decorateor run first but the constructor function runs bottom up start
 *
 * This is a Decorator Factory function, you will be able to accept custom arguments
 * with this.
 */
function Logger(logString: string) {
    console.log("LOGGER FACTORY");
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
 * this happen in the first return function which will fired at when the class is created.
 *
 * Take an extra step by returning a class / constructor inside of the first return statement that will
 * keep the former class property but you can add another custom logic inside of it. 
 * The difference here is the logic inside the new class / constructor will not be
 * fired when the class is created but when the class is instantiated.
 */
function WithTemplate(template: string, hookId: string) {
    console.log("TEMPLATE FACTORY");
    return function <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering Template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        };
    };
}

// @Logger("LOGGING - PERSON")
@Logger("Logging")
@WithTemplate("<h1>My Person Object<h1>", "app")
class Person {
    name = "Max";

    constructor() {
        console.log("Creating person object...");
    }
}

const pers = new Person();

console.log(pers);

/**
 * This is a Property Decorator, to access informations that the property has.
 * target if an instance will return prototype but if static will return constructor.
 */
function Log(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator!");
    console.log(target, propertyName);
}

/**
 * Accessor Decorator
 */
function Log2(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

/**
 * Method Decorator
 */
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

/**
 * Parameter Decorator
 */
function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid Price, should be positive.");
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book2", 10);
