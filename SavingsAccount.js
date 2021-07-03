import { Account } from "./Account.js";
export class SavingsAccount extends Account{
    constructor(client, agency, openingBalance){
        super(client, agency, openingBalance);
    }
}