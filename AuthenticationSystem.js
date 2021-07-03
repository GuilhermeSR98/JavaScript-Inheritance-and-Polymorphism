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