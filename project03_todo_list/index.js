#! /usr/bin/env node
// project03_todo_list:-
import chalk from "chalk";
import inquirer from "inquirer";
let todoList = [];
let loop = true;
console.log(chalk.blue("WELCOME TO XYZ STORE!"));
console.log(chalk.green('"XYZ STORE: The One Stop Solution For Everyone"'));
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "query",
            message: "What Item Do You Want To Order?",
        },
        {
            type: "confirm",
            name: "reviewOrder",
            message: "Do You Want To Order Anymore Item?",
            default: false,
        },
    ]);
    loop = userInput.reviewOrder;
    if (userInput.query) {
        todoList.push(userInput.query);
    }
}
;
if (todoList.length > 0) {
    console.log(chalk.green("This Is Your Final Order List:-"));
    todoList.forEach(i => {
        console.log(chalk.yellow(i));
    });
    console.log(chalk.blue("THANK YOU FOR SHOPPING WITH US, HAVE A NICE DAY."));
}
else {
    console.log(chalk.red("Please Select Any Item To Order"));
}
;
