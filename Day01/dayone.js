console.log("Welcome to MERN");

// How do we declare variables
var varname = "something";

// Let and Const
// Let
let var2 = 7;
// Let is a function scoped variable
for(let i = 0; i < 4; i++) {
    console.log(i);
}

// console.log(i);

for(let i = 0; i < 8; i++) {
    console.log(i);
}

// console.log(i);

// Const
const var3 = "some value";
// const variable are unchanging
// var3 = "something else";

const arr = [1,2,3,4];
arr[2] = 7;
// arr = [4,6,7,8];
// console.log(arr);
// const variables cannot be changed
// However we can change the values inside of objects and arrays that are const values

// Rest/Spread
const myArray = [1,2,3,4,5];
const copyArray = [...myArray];
myArray[2] = 20;
console.log(myArray);
console.log(copyArray);

var mystring = "Hello";
var copyString = mystring;

console.log(copyString);

// Ternary operator
if(mystring == "Hello"){
    console.log("Hello there!");
} else {
    console.log("See you later!");
}
mystring = "Goodbye";
// Question                  True                         False
mystring == "Hello" ? console.log("Hello there!") : console.log("See you later!");

// Destructuring
const destructArray = ["horse", "sheep", "cow", "pig", "dog"];

const [ , , anim1, anim2, anim3] = destructArray;

console.log(anim2);

const [, animal2, ...animals] = destructArray;

console.log(animals);