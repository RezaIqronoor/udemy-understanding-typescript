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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Regayaku",
    age: 18,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
/**
 * How to assign array type to variable explicitly
 */
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error because .hobbies is not of array variable but string
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
