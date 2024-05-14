#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
``;
let enemiesList = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHp = 75;
let enemyHitDamage = 25;
let playerHp = 100;
let playerHitDamage = 50;
let totalHealHp = 3;
let healHpChance = 50; // Percentage
let healHpRefill = 30;
let playerLevel = 1;
let playing = true;
let getRandNo = (min, max) => {
    return Math.round(Math.random() * max - min) + 1;
};
console.log(chalk.green(("-".repeat(90))));
console.log(`                   ${chalk.bold.cyan("Welcome To The Dungeon Adventure Game!")}`);
console.log(chalk.green(("-".repeat(90))));
console.log(`                               ${chalk.green("Powered By")}`);
console.log(`                   ${chalk.bold.cyan(">>>>>")} ${chalk.bold.yellow("SYED MUHAMMAD RAZA ZAIDI")} ${chalk.bold.cyan("<<<<<")}`);
GAME: while (playing) {
    console.log(chalk.green(("-".repeat(90))));
    let randEnemy = enemiesList[Math.floor(Math.random() * enemiesList.length)];
    console.log(chalk.red(`${randEnemy}`), "Has Appeared To Fight\n");
    let enemyHp = getRandNo(1, maxEnemyHp);
    while (enemyHp > 0 && playerHp > 0) {
        console.log(`# Your HP : ${playerHp} `);
        console.log(`# ${randEnemy} HP : ${enemyHp}\n`);
        let playerSelect = await inquirer.prompt({
            type: "list",
            name: "command",
            choices: ["Attack", "Heal", "Run"],
            message: "What Do You Want To Do?",
        });
        switch (playerSelect.command) {
            case "Attack":
                let playerStrike = getRandNo(1, playerHitDamage);
                let enemyStrike = getRandNo(1, enemyHitDamage);
                enemyHp -= playerStrike;
                playerHp -= enemyStrike;
                console.log(chalk.green(("-".repeat(90))));
                console.log(`# You Strike The ${randEnemy} With ${playerStrike} Damage `);
                console.log(`# The ${randEnemy} Strike You With ${enemyStrike} Damage \n`);
                break;
            case "Heal":
                if (totalHealHp > 0) {
                    playerHp += healHpRefill;
                    console.log(chalk.green(("-".repeat(90))));
                    console.log(`# You Used HealHP!, You Gain HP By : ${healHpRefill} `);
                    console.log(`# Your New HP Is Now : ${playerHp} `);
                    totalHealHp -= 1;
                    console.log(chalk.italic.red(`\n# You Now Have ${totalHealHp} Left!`));
                }
                else {
                    console.log(chalk.red(("-".repeat(90))));
                    console.log(chalk.italic.red(`>> Alas! You Dont Have Any HealHP left, Defeat Enemy To Get More HealHP <<`));
                    console.log(chalk.red(("-".repeat(90))));
                }
                break;
            case "Run":
                console.log(chalk.red.italic(`\n>> You Ran Away From ${randEnemy} <<`));
                continue GAME;
        }
    }
    if (enemyHp <= 0 && playerHp <= 0) {
        console.log(chalk.blue(("-".repeat(90))));
        console.log(chalk.italic.blue(`>> It's A Draw! <<`));
        console.log(chalk.blue(("-".repeat(90))));
        console.log(``);
    }
    else if (enemyHp <= 0) {
        console.log(chalk.green(("-".repeat(90))));
        console.log(chalk.italic.green(`>> You Won! ${randEnemy} Has Been Defeated <<`));
        console.log(chalk.green(("-".repeat(90))));
        playerLevel += 1;
        console.log(chalk.italic.yellow(`\n# You Have Now Advanced To : Level ${playerLevel}`));
        if (getRandNo(1, 100) < healHpChance) {
            totalHealHp += 1;
            console.log(chalk.italic.yellow(`# ${randEnemy} Has Dropped A HealHP!`));
        }
        ;
        console.log(chalk.italic.green(`# Now You Have ${totalHealHp} HealHP(s) Available\n`));
    }
    else if (playerHp <= 0) {
        console.log(chalk.red(("-".repeat(90))));
        console.log(chalk.italic.red(`>> You Lose! ${randEnemy} Has Defeated You <<`));
        console.log(chalk.red(("-".repeat(90))));
        setTimeout(() => {
            console.log(chalk.red((`THE END!`)));
        }, 1250);
        break;
    }
    let gameState = await inquirer.prompt({
        name: "command",
        type: "list",
        message: "Do You Want To Play Again?",
        choices: ["Play Again", "Exit Game"]
    });
    switch (gameState.command) {
        case "Play Again":
            continue GAME;
        case "Exit Game":
            setTimeout(() => {
                console.log(chalk.yellow(("-".repeat(90))));
                console.log(chalk.bold.yellow(`>> Thank You For Playing Dungeon Adventure Game! <<`));
                console.log(chalk.yellow(("-".repeat(90))));
            }, 1250);
            playing = false;
    }
}
;
