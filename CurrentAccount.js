import { Account } from './Account.js';
export class CurrentAccount extends Account{ 
    static numberOfAccounts = 0;
    constructor(client, agency, openingBalance){
        super(client, agency, openingBalance);
        CurrentAccount.numberOfAccounts ++;
    }
}