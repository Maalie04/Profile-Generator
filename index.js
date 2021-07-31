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

// prompt questions using inquirer for manager input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is the managers name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter your manager id"
        },
        {
            type: "input",
            name: "managersEmail",
            message: "Enter your email?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter office number"
        },
])
.then(data => {
    let manger = new Manager(data.manager, data.managerID, data.managerEmail, data.officeNum);
    teamMember.push(manager);
    // additional team member
    if(data.teamMember === intern){
        addIntern();
    } 
    else if(data.teamMember === engineer){
        addEngineer();
    }
})
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
            message: "enter your id"
        },
        {
            type: "input",
            name: "engineersEmail",
            message: "enter email?"
        },
        {
            type: "input",
            name: "github",
            message: "enter github"
        },
])
.then(data => {
    let engineer = new Engineer(data.engineer, data.engineerID, data.engineersEmail, data.github);
    teamMember.push(engineer);
    // additional team member
    if(data.teamMember === intern){
        addIntern();
    }
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
            choices: ["engineer", "intern", "exit"],
        },
])
.then(data => {
    let intern = new Intern(data.engineer, data.engineerID, data.engineersEmail, data.github);
    teamMember.push(intern);
    // additional team member
    if(data.teamMember === engineer){
        addEngineer();
    }
})

};

const addMember = () => {
    1
}
const init = () => {
    promptUser()
        .then((data) =>
            fs.writeFile('teamProfile.HTML', renderOutPut(data), (err) =>
                err ? console.error(err) : console.log('HTML Team Profile was successfully created!!')));
};



init();