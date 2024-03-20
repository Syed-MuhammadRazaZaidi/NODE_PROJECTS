// import inquirer from "inquirer";
// const inputs:{
//     first_number : number,
//     second_number : number,
//     operator: string,
// } = await inquirer.prompt([
//     {
//         type: "number",
//         name: "first_number",
//         message: "Enter your first number",
//     },
//     {
//         type: "list",
//         name: "operator",
//         choices: ["+","-","*","/"],
//         message: "Select Operator ",
//     },
//     {
//         type: "number",
//         name: "second_number",
//         message: "Enter your second number",
//     }
// ])
// console.log(inputs);
// if (inputs.first_number && inputs.operator && inputs.second_number ) {
//         let result:number = 0 
//     if (inputs.operator === "+") {
//         result = inputs.first_number + inputs.second_number;
//     }else  if (inputs.operator === "-") {
//         result = inputs.first_number - inputs.second_number;
//     }else  if (inputs.operator === "*") {
//         result = inputs.first_number * inputs.second_number;
//     }else  if (inputs.operator === "/") {
//         result = inputs.first_number / inputs.second_number;
//     }
//     console.log("Your result is: ", result);
// }else {
//     console.log("Kindly enter valid input");
// }
import chalk from "chalk";
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
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
    let result = 0;
    if (userInput.operator === "+") {
        result = userInput.first_value + userInput.second_value;
        console.log("Your result is: \t", result);
    }
    else if (userInput.operator === "-") {
        result = userInput.first_value - userInput.second_value;
        console.log("Your result is: \t", result);
    }
    else if (userInput.operator === "/") {
        result = userInput.first_value / userInput.second_value;
        console.log("Your result is: \t", result);
    }
    else if (userInput.operator === "*") {
        result = userInput.first_value * userInput.second_value;
        console.log("Your result is: \t", result);
    }
}
else {
    console.log(chalk.red("Kindly Provide The Required Inputs"));
}
;
