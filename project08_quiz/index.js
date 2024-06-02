#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.green("-".repeat(90)));
console.log(`                       ${chalk.bold.cyan("Welcome To TypeScript Quiz!")}`);
console.log(chalk.green("-".repeat(90)));
console.log(`                                ${chalk.green("Powered By")}`);
console.log(`                   ${chalk.bold.cyan(">>>>>")} ${chalk.bold.yellow("SYED MUHAMMAD RAZA ZAIDI")} ${chalk.bold.cyan("<<<<<\n")}`);
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1) : What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?\n",
        choices: ["\tImplicit", "\tExplicit"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2) : True or False: Interfaces are similar to type aliases, but only for object types?\n",
        choices: ["\tTrue", "\tFalse"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3) :What are the two types of enums?",
        choices: [
            "\tString and Number",
            "\tNumber and Number Array",
            "\tNumber and Boolean",
            "\tString and Boolean\n",
        ],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4) :What is the type of the parameter: `function ex(param1?: string){}`?\n",
        choices: [
            "\tstring",
            "\tstring | null",
            "\tstring | undefined",
            "\tunknown",
        ],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5) : _____ is a return type for when nothing is returned.?\n",
        choices: ["\tany[]", "\tany", "\tvoid", "\tunknown"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "\tExplicit":
        console.log(chalk.bold.green(`> A1) CORRECT! \n`));
        score += 10;
        break;
    default:
        console.log(chalk.bold.italic.red(`\n> A1) INCORRECT:- \t`));
        console.log(chalk.bold.italic.blueBright(` - Correct Answer is: "Explicit" \n`));
}
switch (quiz.question_2) {
    case "\tTrue":
        console.log(chalk.bold.green(`> A2) CORRECT! \n`));
        score += 10;
        break;
    default:
        console.log(chalk.bold.italic.red(`> A2) INCORRECT:- \t`));
        console.log(chalk.bold.italic.blueBright(` - Correct Answer is: "True" \n`));
}
switch (quiz.question_3) {
    case "\tString and Number":
        console.log(chalk.bold.green(`> A3) CORRECT! \n`));
        score += 10;
        break;
    default:
        console.log(chalk.bold.italic.red(`> A3) INCORRECT:- \t`));
        console.log(chalk.bold.italic.blueBright(` - Correct Answer is: "String and Number" \n`));
}
switch (quiz.question_4) {
    case "\tstring | undefined":
        console.log(chalk.bold.green(`> A4) CORRECT! \n`));
        score += 10;
        break;
    default:
        console.log(chalk.bold.italic.red(`> A4) INCORRECT:- \t`));
        console.log(chalk.bold.italic.blueBright(` - Correct Answer is: "string | undefined" \n`));
}
switch (quiz.question_5) {
    case "\tvoid":
        console.log(chalk.bold.green(`> A5) CORRECT! \n`));
        score += 10;
        break;
    default:
        console.log(chalk.bold.italic.red(`> A5) INCORRECT:- \t`));
        console.log(chalk.bold.italic.blueBright(` - Correct Answer is: "void" \n`));
}
setTimeout(() => {
    console.log(chalk.yellow("-".repeat(90)));
    console.log(chalk.bold.yellow(`                     >> Your TypeScript Quiz Score Is : ${score}/50! <<`));
    console.log(chalk.yellow("-".repeat(90)));
}, 1250);
