#! /usr/bin/env node

// project03_todo_list:-

import chalk from "chalk";
import inquirer from "inquirer";

let exchangeRates = {
    "PKR":{
        "USD": 0.0035971223021583,
        "GBP": 0.0028464078333144,
        "PKR": 1
    },
    "USD":{
        "PKR": 278.00,
        "GBP": 0.79,
        "USD": 1
    },
    "GBP":{
        "PKR": 351.34,
        "GBP": 1,
        "USD": 1.26
    },
};

console.log(chalk.green("WELCOME TO XYZ EXCHANGE SERVICE:"));

let getExchange: {from: "USD" | "GBP" | "PKR", to: "USD" | "GBP" | "PKR", amount:number} = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency:"
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: "Get Exchanged To:"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount:"
    },
]);

if (getExchange.from && getExchange.to && getExchange.amount) {

    let amountExchanged =  exchangeRates[getExchange.from][getExchange.to] * getExchange.amount;
    console.log(`Your Exchanged Amount from ${chalk.yellow(getExchange.from)} To ${chalk.yellow(getExchange.to)} Is: ${chalk.green(amountExchanged)}`);
} 

else {
    console.log(chalk.red("Plese Provide Valid Inputs"));
};