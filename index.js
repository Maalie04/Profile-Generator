//import inquirer package
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
//import manager,engineer, and intern classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderOutPut = require('./dist/renderOutput');
const Employee = require('./lib/Employee');
let teamMember = [];


// prompt questions using inquirer for manager input
const managerQ = [
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
            name: "managerEmail",
            message: "Enter Manager email?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter office number"
        },
    ]

    const internQ = [
        {
            type: "input",
            name: "intern",
            message: "Enter Interns name?"
        },
        {
            type: "input",
            name: "internID",
            message: "Enter intern id"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter intern email?"
        },
        {
            type: "input",
            name: "school",
            message: "Enter school"
        },
    ]

const engineerQ = 
[
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
            name: "engineerEmail",
            message: "Enter Engineer email?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter Engineer github"
        },
]
const addMember = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addMember",
            message: "Do you want to add another member?",
            choices: ["Intern", "Engineer", "Exit"]
        },
    ])
        .then(data => {
            // additional team member
            console.log(data.addMember);
            if (data.addMember === "Intern") {
                addIntern();
            }
            else if (data.addMember === "Engineer") {
                addEngineer();
            }
            else {
             buildFile();
            }
        }).catch((err) => console.error('Promise rejected:', err));

};

const init = () => {
  inquirer.prompt(managerQ)
  .then(data => {
      const manager = new Manager(data.manager,data.managerID,data.managerEmail,data.officeNum);
      teamMember.push(manager);
      addMember();
  })

  
};
const addEngineer = () => {
    inquirer.prompt(engineerQ)
    .then(data => {
        const engineer = new Engineer(data.engineer,data.engineerID,data.engineerEmail,data.github);
        teamMember.push(engineer);
        addMember();
return  `<div class="teamCard">
<div class="cardTitle">
    <h3>Title - Engineer </h3>
</div>
<div class="cardBody">
    <ul>
    <li>Name: ${teamMember.name}</li>
    <li>ID: ${teamMember.id}</li>
    <li>Email: ${teamMember.email}</li>
    <li>Github: ${teamMember.github}</li>                
    </ul>
</div>
</div>
`
    });
}
const addIntern = () => {
    inquirer.prompt(internQ)
    .then(data => {
        const intern = new Intern(data.intern,data.internID,data.internEmail,data.school);
        teamMember.push(intern);
        addMember();
return `
        <div class="teamCard">
        <div class="cardTitle">
            <h3>Title - Intern</h3>
        </div>
        <div class="cardBody">
            <ul>
            <li>Name: ${teamMember.name}</li>
            <li>ID: ${teamMember.id}</li>
            <li>Email: ${teamMember.email}</li>
            <li>Github: ${teamMember.github}</li>                
            </ul>
        </div>
    </div>
 `   });
}

const buildFile = () => {
    
    fs.writeFile(path.join(__dirname, "TeamProfile.html"), renderOutPut(teamMember), (err) =>
        err ? console.error(err) : console.log('HTML Team Profile was successfully created!!'));
}



init();