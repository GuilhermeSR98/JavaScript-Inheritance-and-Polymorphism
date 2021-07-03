import { Employee } from "./Employee.js";

export class Director extends Employee{
    constructor(name, salary, cpf){
        super(name, salary, cpf);
        this._bonification = 2;
        this._password = 55555;
    }
}