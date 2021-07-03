import { Account } from "./Account.js";
export class SavingsAccount extends Account{
    constructor(client, agency, openingBalance){
        super(client, agency, openingBalance);
    }
    withdraw(value) {
        const rate = 1.02
        return this._withdraw(value, rate);
    }
}