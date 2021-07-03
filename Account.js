// Abstract Class
export class Account{
    constructor(client, agency, openingBalance){
        if(this.constructor == Account){
            throw new Error("you shouldn't instantiate an object of an abstract class.");
        }
        this._client = client;
        this._agency = agency;
        this._balance = openingBalance;
    }

    withdraw(value) {
        const rate = 1;
        return this._withdraw(value, rate);
    }
    _withdraw(value, rate){
        const amount = value * rate;
        if(this._balance < amount || value < 0) {
            console.log(`Insufficient balance to do a ${value} withdraw.`);
            return;
        }
        this._balance -= amount;
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

    set client(newValue){
        if(newValue instanceof Client){
            this._client = newValue;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }
}