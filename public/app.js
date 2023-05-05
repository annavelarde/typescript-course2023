//lesson-15
//instance of the IsPerson with all the values
const me = {
    name: 'anna',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
// console.log(me)
// me.spend(30)
// me.speak('anna')
const greetPerson = (person) => {
    console.log('welcome', person.name);
};
greetPerson(me);
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
