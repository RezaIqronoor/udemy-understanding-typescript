/**
 * You can assign object types to variable
 * by the following, note that the lower code
 * is the better practice
 */
// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name:string;
    age: number;
    hobbies: string[];
    /**
     * This is a Tuple types, it gives you a fixed length array,
     * along with fixed position of where a type of variable
     * should be. 
     * 
     * ex: type number should be in pos 0
     */
    role: [number, string];
} = {
    name: "Regayaku",
    age: 18,
    hobbies: ["Sports", "Cooking"], 
    role: [2, 'author']
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

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error because .hobbies is not of array variable but string
}
