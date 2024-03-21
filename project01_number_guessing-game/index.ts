#! /usr/bin/env node

// NUMBER GUESSING GAME:-

import inquirer from "inquirer";
import chalk from "chalk";

let score = 0;
let play = true;

async function guessingGame() {
    while (play) {
let compGeneratedNum: number = Math.round((Math.random()*2 + 1));

let userNum: {userSelection:number} = await inquirer.prompt(
    {
    type: "number",
    name: "userSelection",
    message: "Guess computer generated number from 1 to 3:"
    }
);

    if (userNum.userSelection) {
        if (userNum.userSelection === compGeneratedNum){
            console.log(chalk.green("Congrats! You guessed the right number"));
            console.log("You get 10 score points");
            score += 10;
        }
        else{
            console.log(chalk.red("Please try again!"));
            play = false;
        }
    console.log(chalk.blue(`Computer Generated Number is:   ${compGeneratedNum}`));
    console.log(chalk.yellow(`Total Score Now Is:             ${score}`));
    }

    else {
        console.log(chalk.red("Invalid input!"));
    }
};
};

guessingGame();
