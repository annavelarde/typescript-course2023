// The DOM & Type Casting

// const anchor = document.querySelector('a');
// console.log(anchor.href) 
//comment:typescript doesnt recognise the consolelog so that's why we do a check

//First check that works
//if (Anchor){console.log(Anchor.href)}

//Second check if we are sure that we have an 'a' in the HTML... we add in line 3 a '!'

const anchor = document.querySelector('a')!;
console.log(anchor.href) 

//let's try to get the form using DOM

//if you have more than one form in the HTML element
//const form= document.querySelector('form)!;  //tyoe HTMLFormElement

//for more than one form in HTML element
// const form =document.querySelector('.new-item-form')!; //type Element
//to specify the type of element... below
const form =document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

//inputs. // using "id"
const type=document.querySelector('#type') as HTMLSelectElement
const tofrom=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event)=>{e.preventDefault();
console.log(type.value,tofrom.value,details.value,amount.valueAsNumber);})

//we use valueAsNumber instead of value because we don´t want the number to be an string.