#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
``;
class Student {
    static counter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 250;
    }
    enrollInCourse(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance of ${this.name} is : $${this.balance}`);
    }
    payTutionFees(feeAmount) {
        this.balance -= feeAmount;
        console.log(`$${feeAmount} Fees Has Been Paid Successfully For ${this.name}, And Now Current Account Balance Of ${this.name} Is : $${this.balance}`);
    }
    showStatus() {
        console.log(`Studnet Name: ${this.name}`);
        console.log(`Studnet ID: ${this.id}`);
        console.log(`Studnet Courses: ${this.courses}`);
        console.log(`Studnet Current Balance Is: $${this.balance}`);
    }
}
;
class StudentsDirectory {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        const student = new Student(name);
        this.students.push(student);
        console.log(`Student ${name} Has Been Added Successfully, ${name} ID Is: ${student.id}`);
    }
    findStudent(studentId) {
        return this.students.find(std => std.id === studentId);
    }
    enrollStudent(studentId, course) {
        let student = this.findStudent(studentId);
        if (student) {
            student.enrollInCourse(course);
            console.log(`${student.name} Has Been Added To ${course} Courses Successfully`);
        }
        else {
            console.log(`Student With ID ${studentId} Does Not Exist, Please Enter A Valid Student ID!`);
        }
    }
    viewBalance(studentId) {
        let student = this.findStudent(studentId);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log(`Student With ID ${studentId} Does Not Exist, Please Enter A Valid Student ID!`);
        }
    }
    payTutionFees(studentId, amount) {
        let student = this.findStudent(studentId);
        if (student) {
            student.payTutionFees(amount);
        }
        else {
            console.log(`Student With ID ${studentId} Does Not Exist, Please Enter A Valid Student ID!`);
        }
    }
    showStatus(studentId) {
        let student = this.findStudent(studentId);
        if (student) {
            student.showStatus();
        }
        else {
            console.log(`Student With ID ${studentId} Does Not Exist, Please Enter A Valid Student ID!`);
        }
    }
}
;
async function sms() {
    console.log(chalk.green(("-".repeat(90))));
    console.log(`                 ${chalk.bold.cyan("Welcome To Student Management System")}`);
    console.log(chalk.green(("-".repeat(90))));
    console.log(`                              ${chalk.green("Powered By")}`);
    console.log(`                 ${chalk.bold.cyan(">>>>>")} ${chalk.bold.yellow("SYED MUHAMMAD RAZA ZAIDI")} ${chalk.bold.cyan("<<<<<")}`);
    console.log(` `);
    let studentManagementSystem = new StudentsDirectory();
    while (true) {
        let userChoice = await inquirer.prompt([
            {
                type: "list",
                name: "choices",
                message: "What Do You Want To Do?",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Tution Fees",
                    "Show Student Status",
                    "Exit"
                ]
            }
        ]);
        switch (userChoice.choices) {
            case "Add Student":
                let stdName = await inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter Student Name"
                    }
                ]);
                studentManagementSystem.addStudent(stdName.name);
                break;
            case "Enroll Student":
                let stdCourse = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter Student ID"
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter Course Name"
                    }
                ]);
                studentManagementSystem.enrollStudent(stdCourse.id, stdCourse.course);
                break;
            case "View Student Balance":
                let stdBal = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter Student ID"
                    }
                ]);
                studentManagementSystem.viewBalance(stdBal.id);
                break;
            case "Pay Tution Fees":
                let stdFee = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter Student ID"
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter Tution Fees Amount"
                    }
                ]);
                studentManagementSystem.payTutionFees(stdFee.id, stdFee.amount);
                break;
            case "Show Student Status":
                let stdStatus = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter Student ID"
                    }
                ]);
                studentManagementSystem.showStatus(stdStatus.id);
                break;
            case "Exit":
                console.log("Thank You For Using Student Management System");
                process.exit();
        }
    }
}
;
sms();
