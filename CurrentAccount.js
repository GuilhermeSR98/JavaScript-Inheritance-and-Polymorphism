import { Account } from './Account.js';
export class CurrentAccount extends Account{ 
    static numberOfAccounts = 0;
    constructor(client, agency, openingBalance){
        super(client, agency, openingBalance);
        CurrentAccount.numberOfAccounts ++;
    }
    withdraw(value) {
        const rate = 1.1
        return this._withdraw(value, rate);
    }
}