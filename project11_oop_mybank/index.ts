#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.green(("-".repeat(90))));
console.log(`                           ${chalk.bold.cyan("Welcome To My Bank!")}`);
console.log(chalk.green(("-".repeat(90))));
console.log(`\n                               ${chalk.green("Powered By")}`);
console.log(`                   ${chalk.bold.cyan(">>>>>")} ${chalk.bold.yellow("SYED MUHAMMAD RAZA ZAIDI")} ${chalk.bold.cyan("<<<<<\n")}`);

interface BankAcc{
    accountNumber: number;
    accountBalance: number;
    withdraw(amount:number): void;
    deposite(amount:number): void;
    viewBalance():void;
};

class BankAccount implements BankAcc{
    accountNumber: number;
    accountBalance: number;

    constructor(accountNumber:number, accountBalance:number){
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }

withdraw(amount: number): void {
    if (this.accountBalance >= amount){
        this.accountBalance -= amount;
        console.log(chalk.green(`Withdrawal Of $${amount} Is Successfull, Remaining Account Balance Is: $${this.accountBalance}`));
    }else{
        console.log(chalk.red("Insufficient Balance!"));
    }
}

deposite(amount: number): void {
    if (amount > 100){
        amount -= 1;
        this.accountBalance += amount;
        console.log(chalk.green(`Deposite Of $${amount} Is Successfull, $1 is Charged As a Service Charges, Remaining Account Balance Is: $${this.accountBalance}`));
    }else{
        this.accountBalance += amount;
        console.log(chalk.green(`Deposite Of $${amount} Is Successfull, Remaining Account Balance Is: $${this.accountBalance}`));
    }
}

viewBalance(): void {
    console.log(chalk.green(`Current Account Balance Is: $${this.accountBalance}`));
}
};

class Customer{
    accountTitle: string;
    gender: string;
    age: number;
    contactNumber: number;
    account: BankAccount

    constructor(accounttitle:string, gender:string, age:number, contactNumber:number, account:BankAccount){
        this.accountTitle = accounttitle;
        this.gender = gender;
        this.age = age;
        this.contactNumber = contactNumber;
        this.account = account;
    }
}

const accounts: BankAccount[] = [
    new BankAccount(10001, 1000),                                                 // Account number
    new BankAccount(10002, 2000),
    new BankAccount(10003, 3000),
];

const customers: Customer[] = [
    new Customer("Raza", "Male", 20, 3334488556, accounts[0]),
    new Customer("Sara", "Female", 25, 3005642813, accounts[1]),
    new Customer("Ali", "Male", 30, 3015638463, accounts[2]),
];

async function myBank(){
        const enterAccNumber = await inquirer.prompt(
            {
                type: "number",
                name: "accountNumber",
                message: "Enter Your Account Number:"
            }
        )
        const customer = customers.find(acc => acc.account.accountNumber === enterAccNumber.accountNumber);

        if (customer) {
            console.log(`Welcome ${customer.accountTitle}!`);
        }else {
                console.log(chalk.red.bold(`Invalid Account Number, Please Try Again!`));
            }
        while (true) {      
        if (customer) {    
            const selectOption = await inquirer.prompt(
                {
                    type: "list",
                    name: "option",
                    message: "Select Option",
                    choices: ["Withdraw Amount", "Deposite Amount", "View Balance", "Exit"]
                }
            )
            switch (selectOption.option) {
                case "Withdraw Amount":
                    const withdrawalAmount = await inquirer.prompt(
                        {
                            type: "number",
                            name: "amount",
                            message: "Enter Your Withdrawal Amount:"
                        }
                    )
                    if (isNaN(withdrawalAmount.amount)){
                        console.log(chalk.red.bold("Invalid Amount!"));
                        break;
                    }else{
                    customer.account.withdraw(withdrawalAmount.amount);
                    }
                    break;
                case "Deposite Amount":
                    const depositeAmount = await inquirer.prompt(
                        {
                            type: "number",
                            name: "amount",
                            message: "Enter Your Deposit Amount:"
                        }
                    )
                    if (isNaN(depositeAmount.amount)){
                        console.log(chalk.red.bold("Invalid Amount!"));
                        break;
                    }else{
                        customer.account.deposite(depositeAmount.amount);
                    }
                    break;
                case "View Balance":
                    customer.account.viewBalance();
                    break;
                case "Exit":
                        console.log(chalk.yellow(("-".repeat(90))));
                        console.log(chalk.bold.yellow(`>> Thank You For Using MyBank App ${customer.accountTitle}! <<`));    
                        console.log(chalk.yellow(("-".repeat(90))));
                        process.exit();
            }
        }
    }
};    

myBank();