
const renderOutPut = (results) => { 
return`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/template.css">
    <title>Profile Generator</title>
</head>

<body>

</body>

</html>

`
const renderMan = (manager) => {
    return `
    <div class="navbar">
        <h2 class="navbarTitle">My Team</h2>
    </div>
    <div class="card">
        <div class="teamCard">
            <div class="cardTitle">
                <h3>Title - Manager</h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${teamMember[0].name}</li>
                <li>ID: ${teamMember[0].id}</li>
                <li>Email: ${teamMember[0].email}</li>
                <li>OfficeNumber: ${teamMember[0].officeNumber}</li>                
                </ul>
            </div>
        </div>`;
}
 const renderEng = (engineer) => {
return `
    <div class="teamCard">
            <div class="cardTitle">
                <h3>Title - </h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${teamMember[1].name}</li>
                <li>ID: ${teamMember[1].id}</li>
                <li>Email: ${teamMember[1].email}</li>
                <li>Github: ${teamMember[1].github}</li>                
                </ul>
            </div>
        </div> `;
 }


const renderInt = (intern) => {
return `

        <div class="teamCard">
            <div class="cardTitle">
                <h3>Title - </h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${teamMember[2].name}</li>
                <li>ID: ${teamMember[2].id}</li>
                <li>Email: ${teamMember[2].email}</li>
                <li>School: ${teamMember[2].school}</li>
                </ul>
            </div>
        </div>
    </div> `;
}

const profileData = [];
    profileData.push(results.filter(employee.getRole() === "Manager").map(data => renderMan(data)).join(""));
    profileData.push(results.filter(employee.getRole() === "Engineer").map(data => renderMan(data)).join(""));
    profileData.push(results.filter(employee.getRole() === "Intern").map(data => renderMan(data)).join(""));
}

module.exports = renderOutPut;



