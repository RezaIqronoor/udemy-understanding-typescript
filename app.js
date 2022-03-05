/**
 * This is an Unkown Type, it's the same as
 * Any Type where you can store any value to the variable except
 * you can't freely assign it to another defined variable.
 *
 * Like the example below you need to type check it or else it will
 * yields an error unlike Any Type.
 */
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
