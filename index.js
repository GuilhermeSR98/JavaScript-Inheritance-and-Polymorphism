import { Client } from "./Client.js";
import { CurrentAccount } from "./Account/CurrentAccount.js";
import { SavingsAccount } from './Account/SavingsAccount.js';
import { SalaryAccount } from "./Account/SalaryAccount.js";

const client1 = new Client('Guilherme', '028.544.021-90', 5384207);
const client2 = new Client('Eduarda', '312.014.021-52', 2309100);

const currentAcount1 = new CurrentAccount(client1, 'St. Leste', 0);
const currentAcount2 = new CurrentAccount(client2 ,'St. Oeste', 0); 

const savingsAccount1 = new SavingsAccount(client1, 'St. Leste', 50);
const savingsAccount2 = new SavingsAccount(client2, 'St. Oeste', 50);

const salaryAccount1 = new SalaryAccount(client1, '', 80);
const salaryAccount2 = new SalaryAccount(client2, '', 80);

salaryAccount1.withdraw(20);

console.log(savingsAccount1, '\n', currentAcount1, '\n', salaryAccount1);
