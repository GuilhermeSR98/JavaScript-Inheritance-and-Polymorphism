export class Client{
    constructor(name, cpf, rg){
        this._name = name;
        this._cpf = cpf;
        this._rg = rg;
        this._password = 22222;
    }
    
    get name(){
        return this._name;
    }

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }
    authenticate(password){
        return this._password == password; 
     }
}