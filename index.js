import { Client } from "./Client.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Director('Guilherme Reis', 10000, 54789630125);
const manager = new Manager('Eduarda Santiago', 8000, 89974413084);
const client = new Client('Mateus', 22158874103, 5387546);

const directorLogged = AuthenticationSystem.login(director, '55555');
const managerLogged = AuthenticationSystem.login(manager, '11111');
const clientLogged = AuthenticationSystem.login(client, '22222');

console.log(directorLogged, '\n', managerLogged, '\n', clientLogged);