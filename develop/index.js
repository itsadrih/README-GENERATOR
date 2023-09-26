// DONE: Included packages needed for this application

const inquirer = require('inquirer');
const { generateMarkdown } = require('./develop/utils/generateMarkdown.js');
const fs = require('fs');

// DONE: Created an array of questions for user input
   const questions = [{

        
  type: 'input',
          name: 'name',
          message: 'Welcome to the README generator. Please enter your name to begin!'
        },


        {
          type: 'input',
          name: 'github username',
          message: 'Please enter your GitHub username.'
        },


        {
          type: 'input',
          name: 'email address',
          message: "Please enter your email address."
        },

        {
          type: 'input',
          name: 'title',
          message: 'What would you like to name your project?',
        },

        {
          type: 'input',
          name: 'description',
          message: 'Please add a description of your project:',
        },

        {
          type: 'input',
          name: 'installation',
          message: 'What are the instructions provided for installation?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Instructions of usage:'
        },

        {
          type: 'input',
          name: 'contributing',
          message: 'How can others contribute to this project?'
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
