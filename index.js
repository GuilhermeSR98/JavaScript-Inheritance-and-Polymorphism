import { CurrentAccount } from "./CurrentAccount.js";
import { Client } from "./Client.js";
import { SavingsAccount } from './SavingsAccount.js';
import { Account } from './Account.js';

const client1 = new Client('Guilherme', '028.544.021-90', 5384207);
const client2 = new Client('Eduarda', '312.014.021-52', 2309100);

const currentAcount1 = new CurrentAccount('St. Leste', client1, 0);
const currentAcount2 = new CurrentAccount('St. Oeste', client2, 0); 

const savingsAccount1 = new SavingsAccount('St. Leste', client1, 50);
const savingsAccount2 = new SavingsAccount('St. Oeste', client2, 50);

const teste = new Account('St. Oeste', client2, 50);

console.log(savingsAccount1, '\n', currentAcount1 );
