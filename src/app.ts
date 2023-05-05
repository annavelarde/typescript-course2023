//lesson-15

//it has two methods 'speak' and 'spend' with one parameter each)
// isPerson use a specific structure.
interface IsPerson{
    name:string;
    age:number;
    speak(a:String):void;
    spend(a:number):number;
}

//instance of the IsPerson with all the values
const me: IsPerson={
    name:'anna',
    age:30,
    speak(text:string):void{
        console.log(text);
    },
    spend (amount:number):number{
        console.log('I spent', amount);
        return amount;
    }
}

// console.log(me)
// me.spend(30)
// me.speak('anna')

const greetPerson =(person: IsPerson)=>{
    console.log('welcome', person.name);
}

greetPerson(me)


import {Invoice} from './classes/Invoice.js';

//we use the reserved word "new" to create new objects
const invOne= new Invoice('anna','work in coding', 250);
const invTwo= new Invoice('juan','work in coding too', 250);

console.log(invOne, invTwo);

const form =document.querySelector('.new-item-form') as HTMLFormElement;

//if we want to them in an array
let invoices: Invoice[]=[]
invoices.push(invOne);
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format()); //we added details private in the class, so we delete "inv.details" from the iteration 
});

//---------

//inputs. 
const type=document.querySelector('#type') as HTMLSelectElement
const tofrom=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber)
;})

