export class Account{
    constructor(inicialBalance, client, agency){
        this._balance = inicialBalance;
        this._client = client;
        this._agency = agency;
    } 
    withdraw(value) {
        if(this._balance < value || value <= 0) {
            console.log(`Insufficient balance to do a ${value} withdraw.`);
            return;
        }
        this._balance -= value;
        return value;
    }
 
     deposit(value){
        if(value > 0) {
          this._balance += value;  
        }
        else {
            console.log('Must be a value greater than 0.')
        }
    }
 
     transfer(value, acount){
        if(value <= 0 || value > this.balance){
            console.log(`Unable to transfer.`);
            return;
        }
        const amount = this.withdraw(value);
        acount.deposit(amount);
    }  
}