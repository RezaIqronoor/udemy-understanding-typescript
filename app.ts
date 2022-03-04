/**
 * You can assign object types to variable
 * by the following, note don't use it if it's redundant
 */
// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name:string;
//     age: number;
//     hobbies: string[];
//     /**
//      * This is a Tuple types, it gives you a fixed length array,
//      * along with fixed position of where a type of variable
//      * should be.
//      *
//      * ex: type number should be in pos 0
//      */
//     role: [number, string];
// } = {
//     name: "Regayaku",
//     age: 18,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

/**
 * This is Enum, to automatically enumerated global constant indentifiers
 * and make it more readable than the usual practice above.
 * The value followed after the previous enum member but you can assign
 * it explicitly or mix it like below.
 */
enum Role { ADMIN = "ADMIN", READ_ONLY = 100, AUTHOR = "AUTHOR"};

const person = {
    name: "Regayaku",
    age: 18,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

/**
 * How to assign array type to variable explicitly
 */
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error because .hobbies is not of array variable but string
}

if(person.role === Role.ADMIN) {
    console.log('is admin');
}