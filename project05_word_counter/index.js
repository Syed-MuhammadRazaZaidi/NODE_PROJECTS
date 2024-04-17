#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.cyan("Welcome To The Word Counter Game!"));
let wordCounter = await inquirer.prompt([
    {
        name: "content",
        type: "input",
        message: "Please Write Something To Count Its Total Number Of Words: ",
    }
]);
let contentArray = wordCounter.content.trim().split(" ");
console.log(`The Words Count Of This Content is: \t ${chalk.yellow(contentArray.length)}`);
