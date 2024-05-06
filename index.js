#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    INR: 0.76,
    PKR: 74.57,
    GBP: 280
};
let user_answer = await inquirer.prompt([
    { name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "GBP"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "GBP"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]), fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(convertedamount);
