import { Employee } from "./Employee.js";

export class Manager extends Employee{
    constructor(name, salary, cpf){
        super(name, salary, cpf);
        this._bonification = 1.1;
        this._password = 00000;
    }
}