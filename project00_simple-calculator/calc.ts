#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const userInput: {first_value:number,second_value:number,operator:string} = await inquirer.prompt([
    {
        type: "number",
        name: "first_value",
        message: "Enter your first number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*"],
        message: "select operator",
    },
    {
        type: "number",
        name: "second_value",
        message: "Enter your second number"
    },
]);

if (userInput.first_value && userInput.operator && userInput.second_value) {
    
    let result:number = 0; 

    if (userInput.operator === "+") {
        result = userInput.first_value + userInput.second_value;
        console.log("Your result is: \t", result);
    }

    else if (userInput.operator === "-"){
        result = userInput.first_value - userInput.second_value;
        console.log("Your result is: \t", result);
    }
    
    else if (userInput.operator === "/"){
        result = userInput.first_value / userInput.second_value;
        console.log("Your result is: \t", result);
    }

    else if (userInput.operator === "*"){
        result = userInput.first_value * userInput.second_value;
        console.log("Your result is: \t", result);
    }
} 

else {
        console.log(chalk.red("Kindly Provide The Required Inputs"));
};
