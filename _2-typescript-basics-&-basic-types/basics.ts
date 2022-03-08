function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect Input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

/**
 * This is how you assign types to in TS
 * There is type interference, like 'number2' or 'resultPhrase',
 * Do not explicitly assign type if value is already assigned
 * since it's redundant. 
 */

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
