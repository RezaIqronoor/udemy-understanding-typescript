/**
 * This is an Union Types to assign multiple type
 * to a variable or parameters.
 */
/**
 * Union Type or any other Type like Object Tyoe 
 * can also be encapsulated in a Type Aliases just like
 * the below example. So you don't have to write the same Union Type
 * over and over again
 */
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
    input1: Combinable,
    input2: Combinable,
    /**
     * This is a Literal Type, same as Union Type except you use 
     * a literal text value to assign to the variable / parameter
     */
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
