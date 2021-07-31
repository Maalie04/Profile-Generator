//import inquirer package
const inquirer = require('inquirer');
const fs = require('fs');
//import manager,engineer, and intern classes
const manager = require('Manager');
const engineer = require('Engineer');
const intern = require('Intern');
const renderOutPut = require('./dist/renderOutput');
let teamMember = [];


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
            message: "Table of contents?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "enter managers office number"
        },
        {
            type: "list",
            name: "teamMember",
            message: "add team member",
            choices: ["engineer", "intern"]
        },
])

};

const init = () => {
    promptUser()
        .then((data) =>
            fs.writeFile('teamProfile.HTML', renderOutPut(data), (err) =>
                err ? console.error(err) : console.log('HTML Team Profile was successfully created!!')));
};

const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineer",
            message: "What is the engineers name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "enter your engineer id"
        },
        {
            type: "input",
            name: "engineersEmail",
            message: "enter engineers email?"
        },
        {
            type: "input",
            name: "github",
            message: "enter engineers github"
        },
        {
            type: "list",
            name: "teamMember",
            message: "add team member",
            choices: ["engineer", "intern"],
        },
])
.then(data => {
    let engineer = new Engineer(data.engineer, data.engineerID, data.engineersEmail, data.github);
    teamMember.push(engineer);
})

};

const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "What is the interns name?"
        },
        {
            type: "input",
            name: "internID",
            message: "enter your intern id"
        },
        {
            type: "input",
            name: "internsEmail",
            message: "enter interns email"
        },
        {
            type: "input",
            name: "github",
            message: "enter interns school"
        },
        {
            type: "list",
            name: "teamMember",
            message: "add team member",
            choices: ["intern", "intern"],
        },
])
.then(data => {
    let engineer = new Engineer(data.engineer, data.engineerID, data.engineersEmail, data.github);
    teamMember.push(engineer);
})

};

init();