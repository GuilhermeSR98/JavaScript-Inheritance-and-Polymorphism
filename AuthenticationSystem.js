export class AuthenticationSystem{
    static login(Authenticateable, password){
        return Authenticateable.authenticate(password);
    }
}