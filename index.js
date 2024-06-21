#! /usr/bin/env node
import inquirer from "inquirer";
async function loginSystem() {
    let system = await inquirer.prompt([
        { message: "Enter UserName", type: "input", name: "userName" },
        { message: "Enter email", type: "input", name: "email" },
        { message: "Enter password", type: "input", name: "password" },
    ]);
    console.log("Login details:", system);
    let allAnswered = Object.values(system).every(answer => answer.trim() !== "");
    if (!allAnswered) {
        console.log("You are missing some questions. Please fill out all fields.");
        return;
    }
    if (system.userName !== system.userName) {
        console.log("Your userName is invalid");
    }
    else if (system.email !== system.email) {
        console.log("Your email is invalid");
    }
    else if (system.password !== system.password) {
        console.log("Your password is invalid");
    }
    else {
        console.log("Congratulations, your sinup is done");
    }
}
async function promptUser() {
    let answers = await inquirer.prompt([
        { message: "What is your name?", type: "input", name: "studentName" },
        { message: "What is your father's name?", type: "input", name: "fatherName" },
        { message: "What is your date of birth?", type: "input", name: "dateOfBirth" },
        { message: "What is your class?", type: "input", name: "class" },
        { message: "What is your address?", type: "input", name: "address" },
        { message: "What is your city name?", type: "input", name: "cityName" },
        { message: "What is your field of study?", type: "input", name: "fieldOfStudy" },
        { message: "Where are you from?", type: "input", name: "whereAreYouFrom" },
    ]);
    let allAnswered = Object.values(answers).every(answer => answer.trim() !== "");
    if (!allAnswered) {
        console.log("You are missing some questions. Please fill out all fields.");
    }
    else {
        console.log("Congratulations, your data is saved in our college. After 1 month, you can come to the college.");
    }
}
async function main() {
    await loginSystem();
    await promptUser();
}
main();
