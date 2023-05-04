// let greet:Function;

//Example 1. Declaring the type of funcion
let greet:(a:string,b:string)=>void;
//describing the values of the parameters of this function
greet = (name:string, greeting:string)=>{
    console.log(`${name} says ${greeting}`);
}

//Example 2. Declaring the type of funcion
let calc: (a:number, b:number, c:string)=>number;

//describing the values of the parameters of this function
calc= (numOne:number, numTwo:number, action:string)=>{
    if(action ==='add'){
        return numOne + numTwo;
    } else{
        return numOne - numTwo;
    }
}

//example 3. Declaring the type of funcion
let logDetails:(obj:{name:string, age:number})=> void;

//describing the values of the parameters of this function
 logDetails =(ninja:{name:string, age:number})=>{
    console.log(`${ninja.name} is ${ninja.age} year old`)
 }


 //example 3.1 Declaring the type of funcion
 let logDetailss:(obj:{name:string, age:number})=> void;

 //using type alias in this example.Swaping all the parameters inside function in line 38 for line 36.
 type Person={name:string, age:number}

 logDetailss =(ninja:Person)=>{
    console.log(`${ninja.name} is ${ninja.age} year old`)
 }

 //note: "type" always go with equal and the first letter goes in capital.