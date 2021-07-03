import { Account } from './Account.js';
export class CurrentAccount extends Account{ 
    static numberOfAccounts = 0;
    constructor(client, agency, openingBalance){
        super(client, agency, openingBalance);
        CurrentAccount.numberOfAccounts ++;
    }
    withdraw(value) {
        const rate = 1.1
        const amount = value * rate;
        if(this._balance < amount || value < 0) {
            console.log(`Insufficient balance to do a ${value} withdraw.`);
            return;
        }
        this._balance -= amount;
        return value;
    }
}