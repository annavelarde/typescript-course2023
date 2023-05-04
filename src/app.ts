// Lesson 13 = Public, Private &Readonly

//if we use access modifiers, then we can comment the below and add (readonly/private/public) in the constructor
class Invoice{
    // readonly client:string; //Readonly: We can't change the value inside or outside the class
    // private details:string;
    // public amount:number;

    constructor(
        readonly client:string,
        private details:string,       
        public amount:number,
        ){ }
     
    format(){
    return`${this.client} owes ${this.amount} for ${this.details} `;
    }
}

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

