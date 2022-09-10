// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')




// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is the title of the project?'
}, {
    type: 'input',
    name: 'Description',
    message: 'Provide a short description of the project.'
}, {
    type: 'input',
    name: 'Table of Contents',
    message: 'Table of Contents'
}, {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?'
}, {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use.'
}, {
    type: 'list',
    name: 'License',
    message:'Please choose a license.',
    choices: [
        {value: 'MIT License'},
        {value: 'GNU AGPLv3'},
        {value: 'GNU GPLv3'},
        {value: 'GNU LGPLv3'},
        {value: 'Mozilla Public License 2.0'},
        {value: 'Apache License 2.0'},
        {value: 'Boost Software License 1.0'},
        {value: 'The Unlicense'},
        {value: 'No License'},
    ]
}, {
    type: 'input',
    name: 'Contributing',
    message: 'Please explain how other developers may contribute to your project.'
}, {
    type: 'input',
    name: 'Tests',
    message: 'Write tests for the appilcation and provide examples on how to run them.'
}, {
    type: 'input',
    name: 'Questions',
    message: 'Contact information for inquiries'
}, {
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub username?'
}, {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
}];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, generateMarkdown(data), function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile(`${data.Title}.md`, data);
        console.log(data)
    });
}

// Function call to initialize app
init();
