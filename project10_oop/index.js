#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.green(("-".repeat(90))));
console.log(`                     ${chalk.bold.cyan("Welcome To Employee Directory!!")}`);
console.log(chalk.green(("-".repeat(90))));
console.log(`\n                               ${chalk.green("Powered By")}`);
console.log(`                   ${chalk.bold.cyan(">>>>>")} ${chalk.bold.yellow("SYED MUHAMMAD RAZA ZAIDI")} ${chalk.bold.cyan("<<<<<\n")}`);
class Employee {
    name;
    salary = 100000;
    constructor(name) {
        this.name = name;
    }
}
class HumanResource {
    employeeList = [];
    addEmployee(newEmployee) {
        this.employeeList.push(newEmployee);
    }
    payEmployee(employeeName, amount) {
        const employee = this.employeeList.find(i => i.name == employeeName);
        if (employee) {
            employee.salary += amount;
        }
        else {
            console.log(chalk.red("Employee Not Found!"));
        }
    }
}
;
const humanResouce = new HumanResource();
const emplpyeeDirectory = async () => {
    while (true) {
        const task = await inquirer.prompt({
            type: "list",
            name: "directory",
            message: "What Do You Want?: ",
            choices: ["Search Employee", "Add Employee", "Pay Employee", "View Employee Directory", "Exit"]
        });
        if (task.directory == "Search Employee") {
            const searchEmployee = await inquirer.prompt({
                type: "input",
                name: "employeeName",
                message: "Please Enter Employee Name?: ",
            });
            const searchResult = humanResouce.employeeList.find(i => i.name == searchEmployee.employeeName);
            if (!searchResult) {
                if (!searchResult && searchEmployee.employeeName.length < 1) {
                    console.log(chalk.red.bold.italic(`Invalid Input!`));
                    continue;
                }
                else {
                    const employeeFound = new Employee(searchEmployee.employeeName);
                    const add = await inquirer.prompt({
                        type: "confirm",
                        name: "addName",
                        message: `Employee: ${searchEmployee.employeeName} Is Not Found In Employee Directory. Do You Want To Add ${searchEmployee.employeeName} In Employee Directory?`,
                    });
                    if (add.addName) {
                        humanResouce.addEmployee(employeeFound);
                        console.log(chalk.blue.bold.italic(`New Employee: ${employeeFound.name} Has Been Added In Employee Directory`));
                    }
                }
                ;
            }
            else if (searchResult) {
                console.log(chalk.blue.bold.italic(`Employee: ${searchEmployee.employeeName} Has Been Found In Employee Directory`));
            }
        }
        ;
        if (task.directory == "Add Employee") {
            const addEmployee = await inquirer.prompt({
                type: "input",
                name: "employeeName",
                message: "Please Enter Employee Name?: ",
            });
            const newEmployee = new Employee(addEmployee.employeeName);
            const searchEmployee = humanResouce.employeeList.find(i => i.name == addEmployee.employeeName);
            if (!searchEmployee) {
                if (!searchEmployee && addEmployee.employeeName.length < 1) {
                    console.log(chalk.red.bold.italic(`Invalid Input!`));
                    continue;
                }
                else {
                    humanResouce.addEmployee(newEmployee);
                    console.log(chalk.blue.bold.italic(`New Employee: ${newEmployee.name} Has Been Added In Employee Directory`));
                }
            }
            else {
                console.log(chalk.blue.bold.italic(`Employee: ${addEmployee.employeeName} Is Already Existed In Employee Directory`));
            }
        }
        ;
        if (task.directory == "Pay Employee") {
            const payEmployee = await inquirer.prompt({
                type: "input",
                name: "employeeName",
                message: "Please Enter Employee Name?: ",
            });
            const searchEmployee = humanResouce.employeeList.find(i => i.name == payEmployee.employeeName);
            const employeeFound = new Employee(payEmployee.employeeName);
            if (!searchEmployee) {
                console.log(chalk.red.bold.italic(`Employee: ${payEmployee.employeeName} Is Not Found In Employee Directory`));
            }
            else {
                const amount = await inquirer.prompt({
                    type: "number",
                    name: "salary",
                    message: "Please Enter Employee Salary Amount?: ",
                });
                humanResouce.payEmployee(employeeFound.name, amount.salary);
                console.log(chalk.green(`Employee: ${employeeFound.name} Has Been Paid: ${amount.salary}`));
            }
        }
        ;
        if (task.directory == "View Employee Directory") {
            console.log(chalk.yellow.bold.italic(`Employees List:-`));
            console.log(humanResouce.employeeList);
        }
        ;
        if (task.directory == "Exit") {
            process.exit();
        }
    }
};
emplpyeeDirectory();
