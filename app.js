/**
 * You can assign object types to variable
 * by the following, note that the lower code
 * is the better practice
 */
// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "Regayaku",
    age: 18,
    hobbies: ["Sports", "Cooking"]
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
