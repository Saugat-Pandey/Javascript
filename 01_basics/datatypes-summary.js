// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 756756567567576567n

// Reference (Non primitive)

// Array, Objects, functions   

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Saugat",
    age: 23
}

const myFunction = function() {
    console.log("Hello World!");    
}

// console.log(typeof bigNumber);


// Stack (Primitive), Heap (Non primitive)

let myYoutubename = "saugatpandeydotcom"

let anothername = myYoutubename
anothername = "saugatpandey"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "saugat@google.com"

console.log(userOne.email);
console.log(userTwo.email);






