"use strict";
let greet;
//greet='hello';
greet = () => { console.log('hello,again'); };
// greet();
//C has two optional number and string. we usually add them at the end.Default parameter is 9.
const add = (a, b, c = 9) => {
    console.log(a + b);
    console.log(c);
};
//We update sting '9' for '8'. 
add(5, 10, '8');
const minus = (a, b) => {
    return a + b;
    // console.log('done');
};
let result = minus(10, 7);
