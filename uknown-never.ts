/**
 * This is an Unkown Type, it's the same as
 * Any Type where you can store any value to the variable except
 * you can't freely assign it to another defined variable.
 *
 * Like the example below you need to type check it or else it will
 * yields an error unlike Any Type.
 */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}

/**
 * This is a Never Type which means this code / function NEVER return
 * a type.
 * 
 * A Throw will brake the script so the function never had a chance to return
 * a type and an Infinite While Loop will keep the script going which won't
 * let the function return any type
 * 
 * If you don't explicitly tell the return type and hover it wil said 
 * void, that's because Never Type is a newer type added to the TS
 */
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    //while (true) {}
}

generateError("An error occured", 500);
