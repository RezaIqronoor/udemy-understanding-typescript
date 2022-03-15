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
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

/**
 * Method Decorator
 */
function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
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

/**
 * Since this refers to the thing that responsible to call the method,
 * if addeventlistener calls it it will return undefined.
 * Below here is an Auto Bind descriptor example.
 */
function AutoBiind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = "This Works!";

    @AutoBiind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

/**
 * Validator Decorators
 */
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[];
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["required"],
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["positive"],
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    console.log(objValidatorConfig);
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleElement = document.getElementById("title") as HTMLInputElement;
    const priceElement = document.getElementById("price") as HTMLInputElement;

    const title = titleElement.value;
    const price = +priceElement.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert("Invalid Input, please try again!");
        return;
    }
    console.log(createdCourse);
});
