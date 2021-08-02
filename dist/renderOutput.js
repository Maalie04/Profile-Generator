const renderOutPut = (array) => {
return`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./template.css">
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
                    <li>Name: </li>
                    <li>ID: </li>
                    <li>Email: </li>
                </ul>
            </div>

            <div class="teamCard">
                <div class="cardTitle">
                    <h3>Title - Role</h3>
                </div>
                <div class="cardBody">
                    <ul>
                        <li>Name: </li>
                        <li>ID: </li>
                        <li>Email: </li>
                    </ul>
                </div>
                <div class="teamCard">
                    <div class="cardTitle">
                        <h3>Title - Role</h3>
                    </div>
                    <div class="cardBody">
                        <ul>
                            <li>Name: </li>
                            <li>ID: </li>
                            <li>Email: </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
`}

module.exports = renderOutPut;