#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter your first number =", type:"number", name:"firstNumber"},
    {message: "Enter your second number =", type:"number", name:"secondNumber"},
    {
        message: "Enter your operation",
        type:"list",
        name:"operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);

//* Conditional Statements

if (answer.operation === "Addition") {
    console.log("Your answer is = ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "Subtraction") {
    console.log("Your answer is = ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "Multiplication") {
    console.log("Your answer is = ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "Division") {
    console.log("Your answer is = ", answer.firstNumber / answer.secondNumber);
}
else ("Select a valid operation");