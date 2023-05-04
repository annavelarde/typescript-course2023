"use strict";
// Lesson 12 = Classes
//Classes. Instead of using camelCase we use pascal. It means to add a capital.
class Invoice {
    //this function inside a class it´s called method
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details} `;
    }
}
//we use the reserved word "new" to create new objects
const invOne = new Invoice('anna', 'work in coding', 250);
const invTwo = new Invoice('juan', 'work in coding too', 250);
console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
//if we want to them in an array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//We can specify the values too below and update some of the values above.
invOne.client = 'Yan';
invTwo.amount = 30;
console.log(invoices);
//---------
//inputs. 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
