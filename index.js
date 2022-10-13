// Here is where I will need to add my imports

const inquire = require('inquire');

const fs = require('fs');

// employees

const Employee = require('employee');

const Engineer = require('engineer');

const Intern = require('intern');

const Manager = require('manager');

// html

const htmlInfo = require('html-info');
const { default: inquirer } = require('inquirer');



// Need to make a list for the employees- MAKE IN HTML!!!!!!!

const employeeArray = []
console.log (employeeArray);

function writeToFile (htmlInfo) {
    fs.writeFile ('index.html', htmlInfo, (err) => 
    err ? console.log("Error writing to file") : console.log("File Created"))
}

// Need to promt the user to add the employee 

function employeeJobs (){
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

// Need to set the values for employees
//Need to return this

// Need to make sure that all catagories requires are included for said emplyee

// need to make function 

// need to generate the html

// loop to make sure they can add as many employees as needed

// need to have a stop button

// init();

// add test files in thier own folder 