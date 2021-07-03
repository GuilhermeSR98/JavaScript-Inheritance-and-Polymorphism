import { CurrentAccount } from "./CurrentAccount.js";
import { Client } from "./Client.js";
import { SavingsAccount } from './SavingsAccount.js';
import { Account } from './Account.js';

const client1 = new Client('Guilherme', '028.544.021-90', 5384207);
const client2 = new Client('Eduarda', '312.014.021-52', 2309100);

const currentAcount1 = new Account(0, client1, 'St. Leste',);
const currentAcount2 = new Account(0, client2, 'St. Oeste',); 

const savingsAccount = new Account(50, client1, 'St. Leste');

console.log(savingsAccount);