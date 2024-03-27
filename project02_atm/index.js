#! /usr/bin/env node
// ATM
import chalk from "chalk";
import inquirer from "inquirer";
let loop = true;
async function atm() {
    let userName = await inquirer.prompt([
        {
            type: "string",
            name: "userId",
            message: "Please Enter Your Username",
        },
        {
            type: "string",
            name: "userPassword",
            message: "Please Enter Your Password",
        },
    ]);
    let randAmount = Math.round(Math.random() * 100000);
    if (userName.userId && userName.userPassword)
        if (userName.userId === "Raza" && userName.userPassword === "123") {
            console.log(chalk.yellow(`Welcome ${userName.userId}!`));
            console.log(chalk.green(`Your Account Balance Is ${randAmount}`));
            while (loop) {
                let selectOptions = await inquirer.prompt([
                    {
                        type: "list",
                        name: "options",
                        choices: ["Cash Withdrawal", "Current Balance", "Exit"],
                        message: "Select Option:",
                    }
                ]);
                if (selectOptions.options === "Cash Withdrawal") {
                    let cashOptions = await inquirer.prompt([
                        {
                            type: "list",
                            name: "cashWithdrawalOptions",
                            choices: ["Fast Cash", "Other Amount"],
                            message: "Select Mode Of Cash Withdrawal:",
                        }
                    ]);
                    if (cashOptions.cashWithdrawalOptions === "Fast Cash") {
                        let fastCash = await inquirer.prompt([
                            {
                                type: "list",
                                name: "fastCashOptions",
                                choices: [1000, 5000, 10000],
                                message: "Select Amount For Withdrawal:",
                            }
                        ]);
                        if (fastCash.fastCashOptions > randAmount) {
                            console.log(chalk.red("Insufficient Balance!, Your Available Balance Is:"), (randAmount));
                        }
                        else if (fastCash.fastCashOptions === 1000) {
                            console.log(chalk.green(`Your Account Balance After Withdrawal Is: ${randAmount -= fastCash.fastCashOptions}`));
                        }
                        else if (fastCash.fastCashOptions === 5000) {
                            console.log(chalk.green(`Your Account Balance After Withdrawal Is: ${randAmount -= fastCash.fastCashOptions}`));
                        }
                        else if (fastCash.fastCashOptions === 10000) {
                            console.log(chalk.green(`Your Account Balance After Withdrawal Is: ${randAmount -= fastCash.fastCashOptions}`));
                        }
                    }
                    if (cashOptions.cashWithdrawalOptions === "Other Amount") {
                        let enteredAmount = await inquirer.prompt({
                            type: "number",
                            name: "userAmount",
                            message: "Enter your amount",
                        });
                        if (enteredAmount.userAmount > randAmount) {
                            console.log(chalk.red("Insufficient Balance!, Your Available Balance Is:"), (randAmount));
                        }
                        else {
                            console.log(chalk.green(`Your Account Balance After Withdrawal Is: ${randAmount -= enteredAmount.userAmount}`));
                        }
                    }
                }
                if (selectOptions.options === "Current Balance") {
                    console.log(chalk.green(`Your Current Balance Is: ${randAmount}`));
                }
                ;
                if (selectOptions.options === "Exit") {
                    console.log(chalk.yellow(`Please Collect Your Card From ATM!`));
                    loop = false;
                }
            }
        }
        else {
            console.log(chalk.red("Invald User Name Or Password!"));
            loop = false;
        }
    else {
        console.log(chalk.red("Please Input Username and Password!"));
        loop = false;
    }
}
;
atm();
