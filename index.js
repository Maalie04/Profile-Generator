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
    // additional team member
    // if(data.teamMember === intern){
    //     addIntern();
    // } 
    // else if(data.teamMember === engineer){
    //     addEngineer();
    // } 
   addMember();
})
};

const addEngineer = () => {
    inquirer.prompt([
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
    // additional team member
    addMember();
})

};

const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "Enter Interns name?"
        },
        {
            type: "input",
            name: "internID",
            message: "Enter Intern id"
        },
        {
            type: "input",
            name: "internsEmail",
            message: "Enter Interns email"
        },
        {
            type: "input",
            name:  "school",
            message: "Enter Interns school"
        },
])
.then(data => {
    let intern = new Intern(data.engineer, data.engineerID, data.engineersEmail, data.github);
    teamMember.push(intern);
    // additional team member
    addMember();
    
})

};

const addMember = () => {
inquirer.prompt([
    {
        type: "list",
        name: "addMember",
        message: "Do you want to add another member?",
        choices:["Intern", "Engineer", "Exit"]
    },
])
.then(data => {
   console.log(data.Intern)
//     if(this.choices === data.Intern){
//    addIntern();
//     } 
//     else if(this.choices === data.Engineer){
//          addEngineer();
//     }
    
//     else if(this.choices === data.Exit){
//      console.log("finished");
//     }
//     else{
//         addMember();
//     }
})


};


const init = () => {
    promptUser()
        .then((data) =>
            fs.writeFile('teamProfile.HTML', renderOutPut(data), (err) =>
                err ? console.error(err) : console.log('HTML Team Profile was successfully created!!')));
};



init();