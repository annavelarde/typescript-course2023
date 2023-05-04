//in this lesson we learnt how to split code from app.ts to Invoice.ts.
import { Invoice } from './classes/Invoice.js';
//we use the reserved word "new" to create new objects
const invOne = new Invoice('anna', 'work in coding', 250);
const invTwo = new Invoice('juan', 'work in coding too', 250);
console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
//if we want to them in an array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format()); //we added details private in the class, so we delete "inv.details" from the iteration 
});
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
