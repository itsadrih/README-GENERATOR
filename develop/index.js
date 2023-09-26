// DONE: Included packages needed for this application

const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
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
          message: 'Are there other contributors to this project?'
        },

        {
            type: 'list',
            name: 'confirmLicenses1',
            message: 'Would you like to include a license? Please say yes or no.',
            choices: ['yes', 'no'],
            when: ({ confirmLicenses }) => !confirmLicenses
          },
           
       {
        type: 'confirm',
        name: 'confirmLicenses2',
        message: 'Would you like to include a license?',
        default: false
       },

     
      {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'CC--0'],
        when: ({ confirmLicenses, confirmLicenses2 }) =>
          confirmLicenses || confirmLicenses2 === 'yes'
      }
];


  
// DONE: Created a function to write README file
const init = () => {
    return inquirer.prompt(questions);
  };

const writeToFile = data => {
    fs.writeFile('README.md', data, error => {
      if (error) {
        console.error(error);
      } else {
        console.log('README.md file created!');
      }
    }); };
  
  
init()
  .then(userInput => {
    return generateMarkdown(userInput);
  })
  .then(readmeInfo => {
    return writeToFile(readmeInfo);
  })
  .catch(error => {
    console.log(error);
  })