//import inquirer package
const inquirer = require('inquirer');
const fs = require('fs');
//import manager,engineer, and intern classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderOutPut = require('./dist/renderOutput');
const Employee = require('./lib/Employee');
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

// prompt questions using inquirer for manager input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "Enter Manager name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter Manager id"
        },
        {
            type: "input",
            name: "managersEmail",
            message: "Enter Manager email?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter office number"
        },
    ])
        .then(data => {
            let employee = new Employee(data.manager, data.managerID, data.managerEmail, data.officeNum);
            teamMember.push(employee);
           
            addMember();
        })
        .catch((err) => console.error('Promise rejected:', err));

};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineer",
            message: "Enter Engineer name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "Enter Engineer id"
        },
        {
            type: "input",
            name: "engineersEmail",
            message: "Enter Engineer email?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter Engineer github"
        },
    ])
        .then(data => {
            let engineer = new Engineer(data.engineer, data.engineerID, data.engineersEmail, data.github);
            teamMember.push(engineer);
        })
        .catch((err) => console.error('Promise rejected:', err));

};

const addMember = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "addMember",
            message: "Do you want to add another member?",
            choices: ["Intern", "Engineer", "Exit"]
        },
    ])
        .then(data => {
            // additional team member
            console.log(teamMember);
            if (data === "Intern") {
                addIntern();
            }
            else if (data === "Engineer") {
                addEngineer();
            }
            else {
                renderOutPut();
            }

        }).catch((err) => console.error('Promise rejected:', err));

};

const init = () => {
    promptUser()
        .then((data) =>
            fs.writeFile('teamProfile.HTML', renderOutPut(data), (err) =>
                err ? console.error(err) : console.log('HTML Team Profile was successfully created!!')));
};



init();