#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

console.log(chalk.green(("-".repeat(90))));
console.log(`                       ${chalk.bold.cyan("Welcome To CountDown Timer!")}`);
console.log(chalk.green(("-".repeat(90))));
console.log(`\n                               ${chalk.green("Powered By")}`);
console.log(`                   ${chalk.bold.cyan(">>>>>")} ${chalk.bold.yellow("SYED MUHAMMAD RAZA ZAIDI")} ${chalk.bold.cyan("<<<<<\n")}`);

const countDown = await inquirer.prompt({

    name: "userInput",
    type: "number",
    message: "Please Enter Seconds To Start CountDown From:",
    validate: (input) => {

        if (isNaN(input)) {
            return "Please Enter A Valid Number";
        } else if (input > 60) {
            return "Please Enter A Number Less Than 60";
        } else {
            return true;
        }
    }
});

let input = countDown.userInput

function countDownTimer(countDownSeconds: number) {

    const countDownInt = new Date().setSeconds(new Date().getSeconds() + countDownSeconds)
    const userCountDown = new Date(countDownInt);

    setInterval((() => {

        const currentTime = new Date();
        const timeLeft = differenceInSeconds(userCountDown, currentTime);

        if (timeLeft <= 0) {
            console.log(chalk.red("CountDown Completed!"));
            process.exit();
        }

        const minutes = Math.floor((timeLeft % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeLeft % 60);

        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);

    }), 1000)
};

countDownTimer(input);