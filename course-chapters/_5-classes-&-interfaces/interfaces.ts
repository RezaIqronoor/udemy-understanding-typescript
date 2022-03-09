/**
 * Interface, describe the structure of an object,
 * you can use it to define a custom type for an object.
 * 
 * Interface is used just like "type" difference is interface
 * can be implemented in class and more clear that it's job
 * is to define an object.
 */
/**
 * How to use interface to define a function.
 */
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    /**
     * You can add readonly, only readonly though...
     */
     readonly name?: string;
     /**
      * using "?" to make properties or paramets optional.
      * So you don't need to initialize it, just make sure
      * the logic is correct.
      */
     outputName?: string;
}
/**
 * Extensing interface (more than 1 is possible).
 */
interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi there, I'm")