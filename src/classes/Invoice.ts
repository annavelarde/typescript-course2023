// Lesson 14 = Modules
//to split and save code in other files.

export class Invoice{
    
    constructor(
        readonly client:string,
        private details:string,       
        public amount:number,
        ){ }
     
    format(){
    return`${this.client} owes ${this.amount} for ${this.details} `;
    }
}