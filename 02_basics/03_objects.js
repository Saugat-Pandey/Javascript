// singleton
// Object.create

// objects literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Saugat",
    "full name": "Saugat Pandey",
    [mySym]: "mykey1",
    age: 23,
    location: "Darmstadt",
    email: "saugat.pandey0209@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "saugat.pandey1705@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "saugat.pandey0517@gmail.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




