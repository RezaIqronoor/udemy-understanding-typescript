function add(n1: number, n2: number) {
    return n1 + n2;
}

/**
 * You can assign a Return Type explicitly
 * to a function. void Type is when you do not return
 * anything or undefined.
 * 
 * You can use undefined Type but you need to return
 * undefined only else you'll get an error
 */
function printResult(num: number): void {
    console.log("Result: " + num);
}

/**
 * This is how you use a function callback.
 * void means that it will ignore any return when the
 * cb is being called.
 */
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

/**
 * This is a Function Type, you can assign a function as type
 * to a variable / parameters.
 * 
 * Inside the bracket is the parameters's type, and after the arrow key
 * is the function's return type
 */
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (res) => {
    console.log(res);
})