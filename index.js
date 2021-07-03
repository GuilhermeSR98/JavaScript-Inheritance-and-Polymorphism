import { Client } from "./Client.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Director('Guilherme Reis', 10000, 54789630125);
const manager = new Manager('Eduarda Santiago', 8000, 89974413084);

const isLoggedIn = AuthenticationSystem.login(director, '55555');

console.log(isLoggedIn);