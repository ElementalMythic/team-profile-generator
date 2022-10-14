// Here is where I will need to add my imports

const inquirer = require('inquirer');

const fs = require('fs');

const htmlInfo = require('./htmlInfo');

const Employee = require('./lib/employee');

const Engineer = require('./lib/engineer');

const Intern = require('./lib/intern');

const Manager = require('./lib/manager');

// const htmlInfo = require('htmlInfo');

// Need to make a list for the employees- MAKE IN HTML!!!!!!!

//const employeeArray = []
//console.log (employeeArray);

//function writeToFile (htmlInfo) {
//    fs.writeFile ('index.html', htmlInfo, (err) => 
//    err ? console.log("Error writing to file") : console.log("File Created"))
//}

const employeeArray = []
console.log (employeeArray);

function writeToFile (htmlInfo) {
    fs.writeFile ('index.html', htmlInfo, (err) => 
    err ? console.log("Error writing to file") : console.log("File Created"))
}

// Need to promt the user to add the employee 



function jobType (){
    
    return inquirer.prompt(

        [
            {
                type : 'list',
                name : 'jobType',
                message : 'Select Job Type',
                choices : ['engineer', 'intern', 'manager'],
            },
            {
                type : 'input',
                name : 'name',
                message : 'Enter Employee Name',
            },
            {
                type : 'input',
                name : 'identification',
                message : 'Enter Employee identification',
            },
            {
                type : 'input', 
                name : 'emailAddress',
                message : 'Enter Email Address',
            }
        ]
    )
}

function engineerExtras() {
    return inquirer.prompt(
        [
            {
                type : 'input',
                name : 'engineerGithub',
                message : 'Enter Engineer GitHub',
            }
        ]
    )
}

function internExtras() {
    return inquirer.prompt(
        [
            {
                type : 'input',
                name : 'internSchool',
                message : 'Enter School',
            }
        ]
    )
}

function managerExtras() {
    return inquirer.prompt(
        [
            {
                type : 'input',
                name : 'managerOffice',
                message : 'Enter Manager Office Number',
            }
        ]
    )
}

async function addProfile() {
    return inquirer
        .prompt(
            [
                {
                    type: 'confirm',
                    message: 'Add Employee',
                    name: 'confirm',
                }
            ]
        )
}

// Need to make sure that all catagories requires are included for said emplyee

// need to generate the html 

// loop to make sure they can add as many employees as they need - await allows for that!

// need to have a stop button - true false 

async function init() {
    
    let employeeAdd = true;

        while (employeeAdd) {
            let job = await jobType();

                if (job.jobType === "engineer"){
                    let eng = await engineerExtras();
                        job = { ...job,...eng };
                        employeeArray.push(job);

                            }else if (job.jobType === "intern"){
                                let int = await internExtras();
                                    job = { ...job,...int };
                                    employeeArray.push(job);

                                        }else (job.jobType === "manager");
                                            let man = await managerExtras();
                                                job = { ...job,...man };
                                                employeeArray.push(job);
        let result = await addProfile 
         // logical not operator !!!!!!!!!!!!
           if    (!result.confirm){
            addProfile = false
            writeToFile(htmlInfo(employeeArray))
           }
    }
}
// answer will stop the "repeat" if the user wants"

// added !

// ! = true 



init()

// add test files in thier own folder 

// ******************************ADD PACKAGE-LOCK.JSON TO GITIGNORE BEFORE INITIAL COMMIT**********************************

// https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files/

// https://stackoverflow.com/questions/244777/can-comments-be-used-in-json

// ^^^^^^^^^ something to consider to try later

