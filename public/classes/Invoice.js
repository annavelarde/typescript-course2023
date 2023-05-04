// Lesson 14 = Modules
//to split and save code in other files.
export class Invoice {
  constructor(client, details, amount) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `${this.client} owes ${this.amount} for ${this.details} `;
  }
}
