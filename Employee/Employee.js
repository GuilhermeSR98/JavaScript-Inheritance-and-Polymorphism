export class Employee{
    constructor(){
        this._name;
        this._salary;
        this._cpf;
        this._bonification = 1;
        this._password;
    }
    registerPassword(password){
        this._password = password;
    }
    get password(){
        return this._password;
    }
}