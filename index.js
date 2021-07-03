import { CurrentAcount } from "./CurrentAcount.js";
import { Client } from "./Client.js";
import { SavingsAccount } from './SavingsAccount.js';


const client1 = new Client('Guilherme', '028.544.021-90', 5384207);
const client2 = new Client('Eduarda', '312.014.021-52', 2309100);

const currentAcount1 = new CurrentAcount('St. Leste', client1);
const currentAcount2 = new CurrentAcount('St. Oeste', client2); 

const savingsAccount = new SavingsAccount(50, client1, 'St. Leste');

console.log(savingsAccount);