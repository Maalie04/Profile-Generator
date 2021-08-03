
const renderOutPut = (teamMember) => { 
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
    <div class="navbar">
        <h2 class="navbarTitle">My Team</h2>
    </div>
    <div class="card">
        <div class="teamCard">
            <div class="cardTitle">
                <h3>Title - Role</h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${teamMember[0].name}</li>
                <li>ID: ${teamMember[0].id}</li>
                <li>Email: ${teamMember[0].email}</li>
                <li>OfficeNumber: ${teamMember[0].officeNumber}</li>                
                </ul>
            </div>
        </div>

        <div class="teamCard">
            <div class="cardTitle">
                <h3>Title - Role</h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${teamMember[1].name}</li>
                <li>ID: ${teamMember[1].id}</li>
                <li>Email: ${teamMember[1].email}</li>
                <li>Github: ${teamMember[1].school}</li>                
                </ul>
            </div>
        </div>
        <div class="teamCard">
            <div class="cardTitle">
                <h3>Title - Role</h3>
            </div>
            <div class="cardBody">
                <ul>
                <li>Name: ${teamMember[2].name}</li>
                <li>ID: ${teamMember[2].id}</li>
                <li>Email: ${teamMember[2].email}</li>
                <li>School: ${teamMember[2].github}</li>
                </ul>
            </div>
        </div>
    </div>
</body>

</html>
`}

module.exports = renderOutPut;



