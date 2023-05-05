import{HasFormatter} from '../interfaces/HasFormatter.js'

//We are importing an exportation called "HasFormatter" and we are complementing the class
export class Invoice implements HasFormatter{
    
    constructor(
        readonly client:string,
        private details:string,       
        public amount:number,
        ){ }
     
    format(){
    return`${this.client} owes ${this.amount} for ${this.details} `;
    }
}