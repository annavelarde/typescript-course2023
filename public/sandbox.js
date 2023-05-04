"use strict";
// let greet:Function;
//Example 1. Declaring the type of funcion
let greet;
//describing the values of the parameters of this function
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Example 2. Declaring the type of funcion
let calc;
//describing the values of the parameters of this function
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3. Declaring the type of funcion
let logDetails;
//describing the values of the parameters of this function
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} year old`);
};
//example 3.1 Declaring the type of funcion
let logDetailss;
logDetailss = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} year old`);
};
//note: "type" always go with equal and the first letter goes in capital.
