// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generageMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = readmeData =>{
    return inquirer.prompt([
        // Has user enter the title for their README file.
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of your README going to be? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter your Title.');
                    return false;
                }
            }
        },
        // Has user enter their Github Username.
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub Username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log ('Please enter GitHub Username.');
                    return false;
                }
            }
        },
        // asks for the repo name
        {
            type: 'input',
            name: 'repoName',
            message: 'What is your GitHub repo name? (Required)',
            validate: repoNameInput => {
                if (repoNameInput) {
                    return true;
                } else {
                    console.log ('Please enter GitHub repo name.');
                    return false;
                }
            }
        },
        
         // Has user enter the Discription for their README file.
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }    
        },
        // Asks the user if they wish to add installation instruction.
        {
            type: 'list',
            name: 'confirmInstallation',
            message: 'Do you wish to add instalation instruction?',
            choices: ['yes', 'no']
        },
        // Asks for installation instructions if answer is yes
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for the project (Required)',
            when(answers) {
                return answers.confirmInstallation === "yes"
            },
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions!');
                    return false;
                }
            } 
        },
        // Asks the user if they wish to add usage information.
        {
            type: 'list',
            name: 'confirmUsageInfo',
            message: 'Do you wish to add Usage Information?',
            choices: ['yes', 'no']
        },
        // Asks for usage information if answer is yes
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Provide usage information for the project (Required)',
            when(answers) {
                return answers.confirmUsageInfo === "yes"
            },
            validate: usageInfoInput => {
                if (usageInfoInput) {
                    return true;
                } else {
                    console.log('You need to enter usage information!');
                    return false;
                }
            } 
        },
        // Asks the user if they wish to add contribution guidelines.
        {
            type: 'list',
            name: 'confirmContribution',
            message: 'Do you wish to add contribution guidelines?',
            choices: ['yes', 'no']
        },
        // Asks for usage information if answer is yes
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines for the project (Required)',
            when(answers) {
                return answers.confirmContribution === "yes"
            },
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to enter contribution guidelines!');
                    return false;
                }
            } 
        },
        // asks if they wish to add Contributer Profile Pics
        {
            type: 'confirm',
            name: 'contributionProfile',
            message: 'Do you wish to add Contributer Profile Images?',
            default: false,
            when(answers) {
                return answers.confirmContribution === "yes"
            },
        },
        // Asks the user if they wish to add test instructions.
        {
            type: 'list',
            name: 'confirmTest',
            message: 'Do you wish to add test instructions?',
            choices: ['yes', 'no']
        },
        // Asks for test instructions if answer is yes
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Provide contribution guidelines for the project (Required)',
            when(answers) {
                return answers.confirmTest === "yes"
            },
            validate: testInstructions => {
                if (testInstructions) {
                    return true;
                } else {
                    console.log('You need to enter Test Instructions!');
                    return false;
                }
            } 
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you use for this project with? (Check all that apply)',
            choices: [
                'Bootstrap', 
                'CSS', 
                'ES6', 
                'Express', 
                'HTML', 
                'MonoDB', 
                'MySQL',
                'PHP',
                'Python', 
                'JavaScript', 
                'jQuery', 
                'Node', 
                'ReactJS',
                'Ruby',
                'SQL'
            ]
        },
        // Asks the user for license information.
        {
            type: 'list',
            name: 'license',
            message: 'What License type is this project?',
            choices: [
                'Academic Free License v3.0',
                'Apache license 2.0',
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'BSD 2-clause "Simplified" license',
                'BSD 3-clause "New" or "Revised" license',
                'BSD 3-clause Clear license',
                'Creative Commons license family',
                'Creative Commons Zero v1.0 Universal',
                'Creative Commons Attribution 4.0',
                'Creative Commons Attribution Share Alike 4.0',
                'Do What The F*ck You Want To Public License',
                'Educational Community License v2.0',
                'Eclipse Public License 1.0',
                'Eclipse Public License 2.0',
                'European Union Public License 1.1',
                'GNU Affero General Public License v3.0',
                'GNU General Public License family',
                'GNU General Public License v2.0',
                'GNU General Public License v3.',
                'GNU Lesser General Public License family',
                'GNU Lesser General Public License v2.1',
                'GNU Lesser General Public License v3.0',
                'ISC',
                'LaTeX Project Public License v1.3c',
                'Microsoft Public License',
                'MIT',
                'Mozilla Public License 2.0',
                'Open Software License 3.0',
                'PostgreSQL License	postgresql',
                'SIL Open Font License 1.1	ofl-1.1',
                'University of Illinois/NCSA Open Source License',
                'The Unlicense	unlicense',
                'zLib License'
            ]
        }        
    ]);  
     
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md',generageMarkdown(), err => {
        if (err) throw err;
        console.log('README Complete')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(readmeData => {
        console.log ("step 1");
        return generageMarkdown(readmeData);
    })
    .then(generageMarkdown => {
        console.log ("step 2");
        return writeToFile(generageMarkdown);
    })
}

// Function call to initialize app
init();

