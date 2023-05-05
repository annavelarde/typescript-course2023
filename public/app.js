//lesson-16
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne = new Invoice ('yoshi', 'web work', 250);
// docTwo = new Payment ('mario', 'plumbing', 200);
// //we create an empty array
// let docs: HasFormatter[]=[]
// docs.push(docOne); //invoice
// docs.push(docTwo);  //payment
// console.log(docs);
//---------
// interface IsPerson{
//     name:string;
//     age:number;
//     speak(a:String):void;
//     spend(a:number):number;
// }
// //instance of the IsPerson with all the values
// const me: IsPerson={
//     name:'anna',
//     age:30,
//     speak(text:string):void{
//         console.log(text);
//     },
//     spend (amount:number):number{
//         console.log('I spent', amount);
//         return amount;
//     }
// }
// console.log(me)
// me.spend(30)
// me.speak('anna')
// const greetPerson =(person: IsPerson)=>{
//     console.log('welcome', person.name);
// }
// greetPerson(me)
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
//inputs. DOM Manipulation
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//for the button 'Add'we use an eventlistener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //esta variable debe cumplir con la funcion HasFormatter
    let doc;
    //type of dropdown (Invoice/Payment)
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber)
    console.log(doc);
    ;
});
