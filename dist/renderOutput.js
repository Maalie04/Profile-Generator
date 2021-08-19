
const renderOutPut = (results) => {

    const renderMan = (manager) => {
        return `
    <div class="navbar">
        <h2 class="navbarTitle">My Team</h2>
    </div>
    <div class="card">
        <div class="teamCard">
            <div class="cardTitle">
                <h3>Team - Manager</h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${manager.getName()}</li>
                <li>ID: ${manager.getId()}</li>
                <li>Email: ${manager.getEmail()}</li>
                <li>OfficeNumber: ${manager.getOfficeNumber()}</li>                
                </ul>
            </div>
        </div>`;
    }
    const renderEng = (engineer) => {
        return `
    <div class="teamCard">
            <div class="cardTitle">
                <h3>Team - Engineer</h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${engineer.getName()}</li>
                <li>ID: ${engineer.getId()}</li>
                <li>Email: ${engineer.getEmail()}</li>
                <li>Github: ${engineer.getGithub()}</li>                
                </ul>
     </div>
        </div> `;
    }


    const renderInt = (intern) => {
        return `

        <div class="teamCard">
            <div class="cardTitle">
                <h3>Team - Intern</h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${intern.getName()}</li>
                <li>ID: ${intern.getId()}/li>
                <li>Email: ${intern.getEmail()}</li>
                <li>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div> `;
    }

    const profileData = [];
    profileData.push(results.filter(employee => employee.getRole() === "Manager").map(data => renderMan(data)).join(""));
    profileData.push(results.filter(employee => employee.getRole() === "Engineer").map(data => renderEng(data)).join(""));
    profileData.push(results.filter(employee => employee.getRole() === "Intern").map(data => renderInt(data)).join(""));

    return profileData
}

module.exports = profileData => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./src/template.css">
        <title>Profile Generator</title>
    </head>

    </body>
        <header>

            <div class= "container">
                 <div class= "row">

                 </div>
                    <div class= "cardRow">
                    ${renderOutPut(profileData)}
                   </div>
            </div>
       </header>     
    <body>
    </html>
    
    `
};



