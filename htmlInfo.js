// have appender thatt will add the input to the file

// need to make sure that the file is going to have sections that generate in the correct order

// Add Styling AFTER working product is generated!!!!!!!!!

function htmlInfo(employeeArray) {

    // let 

    let htmlPreset = 

        `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <link rel="stylesheet" href="./assets/css/style.css">
                    <title>Team</title>
                </head>

                <body>
                    <div></div>`

    function appender() {

    let dataInputs = ""
        for (let i = 0; i < employeeArray.length; i++) {
            dataInputs += // html generation
            `<div>
                <h2>${employeeArray[i].name}</h2>
                <h3>Role:${employeeArray[i].jobType}</h3>
                <p>ID: ${employeeArray[i].identification}</p>
                <p>Email: ${employeeArray[i].emailAddress}</p>
            `

                if (employeeArray.jobType === 'Engineer')
                    {
                        dataInputs += 
                            `<p>GitHub: ${employeeArray[i].engineerGithub}</p></div>`;
                    }
                else if (employeeArray.jobType === 'Intern')
                    {
                        dataInputs +=
                            `<p>School: ${employeeArray[i].internSchool}</p></div>`;
                    }
                else (employeeArray.jobType === 'Manager')
                    {
                        dataInputs +=
                            `<p>Office Numer: ${employeeArray[i].managerOffice}</p></div>`;
                    }
        
        }
    return dataInputs;
    }
    return htmlInfo + appender();
}

module.exports = htmlInfo;

// how to connect these documents?????

// add functions? 

// make single function?

// s
