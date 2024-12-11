let x: number = 10;
console.log(x);

function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Akshay");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, 20));

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  }
  return false;
}

const legal = isLegal(80);
console.log(legal);

//Create a function that take another function as an input and runs it after 1 second

function runAfter1Sec(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfter1Sec(function () {
  console.log("Hello Typescript");
});

//Interface

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Akshay Gaur",
  age: 22,
};

function isAdult(user: User) {
  if (user.age > 18) {
    return true;
  }
  return false;
}

function sayHello(user: User) {
  console.log("Hello " + user.name);
}

const adult = isAdult(user);
console.log(adult);
sayHello(user);

//id can be either number or string

type greetArg = number | string | boolean;

function greetings(id: greetArg){
    console.log("hello " + id);
}

greet("Say Hello");

type Employee = {
    name: string,
    startDate: Date,
};

interface Manager {
    name: string,
    department: string
};

type TechLead = Employee & Manager;

const t: TechLead = {
    name: "Akshay",
    startDate: new Date(),
    department: "Technical"
};

console.log(t);