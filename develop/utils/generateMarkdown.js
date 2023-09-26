// DONE: CreateD a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
  }
}

// DONE: Create a function that returns the license link

function renderLicenseLink(license) {
  if (license === 'CC--0') {
    return `http://creativecommons.org/licenses/by-nd/4.0`
  }

  if (license === 'MIT') {
    return `http://lbesson.mit-license.org/`
  }
 
}

// DONE - If there is no license, return an empty string
// DONE: Created a function that returns the license section of README


function renderLicenseSection(license) { 
  if (!license) {
  return ``;
} else {
  return `## Licenses
  This project is using the ${license} license.`
}


}

// DONE: CreateD a function to generate markdown for README
// DONE:ADDED TABLE OF CONTENTS 
function generateMarkdown(data) {

  return `# ${data.title}
 ${renderLicenseBadge(data.licenses)}



## Table of Contents
#[Description](#description)
#[Installation](#installation)
#[Usage](#usage)
#[Licenses](#licenses)
#[Contributing](#contributing)
#[Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Licenses
${data.licenses}

## Contributing
${data.contributing}

## Questions
${data.questions}
If you have any questions on this project please feel free to reach out to me.
GitHub: https://github.com/${data.github}  
Email: ${data.email}
`
}

module.exports = {generateMarkdown};

