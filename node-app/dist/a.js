"use strict";
let x = 10;
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Akshay");
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
const legal = isLegal(80);
console.log(legal);
function runAfter1Sec(fn) {
    setTimeout(fn, 1000);
}
runAfter1Sec(function () {
    console.log("Hello Typescript");
});
const user = {
    name: "Akshay Gaur",
    age: 22,
};
function isAdult(user) {
    if (user.age > 18) {
        return true;
    }
    return false;
}
function sayHello(user) {
    console.log("Hello " + user.name);
}
const adult = isAdult(user);
console.log(adult);
sayHello(user);
function greetings(id) {
    console.log("hello " + id);
}
greet("Say Hello");
;
const t = {
    name: "Akshay",
    startDate: new Date(),
    department: "Technical"
};
console.log(t);
