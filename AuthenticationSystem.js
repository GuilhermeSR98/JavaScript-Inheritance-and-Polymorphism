//Duck typing in computer programming is an application of the duck test—"If it walks like a duck and it quacks like a duck, then it must be a duck"—to determine whether an object can be used for a particular purpose. With normal typing, suitability is determined by an object's type.
export class AuthenticationSystem{
    static isAuthenticateable(authenticateable){
        return 'authenticate' in authenticateable &&
        authenticateable.authenticate instanceof Function;
    }
    static login(Authenticateable, password){
        if(AuthenticationSystem.isAuthenticateable(Authenticateable)){
            return Authenticateable.authenticate(password);
        }
        return false;
    }
}