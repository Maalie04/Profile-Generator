//import inquirer package
const inquirer = require('inquirer');
const fs = require('fs');
//import manager,engineer, and intern classes
const Manager = require('Manager');
const Engineer = require('Engineer');
const Intern = require('Intern');

/* WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated */

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managers",
            message: "What is the managers name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "enter your manager id"
        },
        {
            type: "input",
            name: "enter managers email",
            default: "Table of contents?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "enter managers office number"
        },
])

};