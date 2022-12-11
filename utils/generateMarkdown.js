var languageBadges ='';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
  case 'None':
    return ''
    break;

  case 'Academic Free License v3.0':
    return `[![License: Academic Free License v3.0](https://img.shields.io/badge/License-Academic%20Free%20License%20v3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)`;
    break;
    
  case 'Apache license 2.0':
    return `[![License: Apache license 2.0](https://img.shields.io/badge/License-Apache%20license%202.0-lightgrey.svg)](https://opensource.org/licenses/Apache-2.0)`;
    break;
  
   case 'ISC':
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-lightgrey.svg)](https://opensource.org/licenses/ISC)`;;
    break;
    
   case 'LaTeX Project Public License v1.3c':
    return "";
    break;
    
   case 'Microsoft Public License':
    return "";
    break;
    
   case 'MIT':
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)`;;
    break;
    
   case 'Mozilla Public License 2.0':
    return `[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-lightgrey.svg)](https://opensource.org/licenses/MPL-2.0)`;
    break;
    
   case 'Open Software License 3.0':
    return `[![License: Open Software License 3.0](https://img.shields.io/badge/License-Open%20Software%20License%203.0-lightgrey.svg)](https://opensource.org/licenses/OLS-3.0)`;
    break;
    
   case 'PostgreSQL License	postgresql':
    return "";
    break;
    
   case 'SIL Open Font License 1.1	ofl-1.1':
    return "";
    break;
    
   case 'University of Illinois/NCSA Open Source License':
    return "";
    break;
    
   case 'The Unlicense	unlicense':
    return "";
    break;
    
   case 'zLib License':
    return `[![License: zLib License](https://img.shields.io/badge/License-zLib%20License-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
    break;
    
   

}
}

// adds installation to Table of Contents if it is needed
function installationToC(readmeData) {
  if (readmeData.confirmInstallation === 'yes') {
    return '- [Installation](#installation)';
  } else {
    return '';
  };
};

// adds installation section
function installationSection(readmeData) {
  if (readmeData.confirmInstallation === 'yes') {
    return `## Installation
${readmeData.installation}
    `;
  } else {
    return '';
  };
};

// adds usage to Table of Contents if it is needed
function usageToC(readmeData) {
  if (readmeData.confirmUsageInfo === 'yes') {
    return '- [Usage](#usage)';
  } else {
    return '';
  };
};

// adds Usage section
function usageSection(readmeData) {
  if (readmeData.confirmUsageInfo === 'yes') {
    return `## Usage
${readmeData.usageInfo}
    `;
  } else {
    return '';
  };
};

// adds Contribution to Table of Contents if it is needed
function contributionsToC(readmeData) {
  if (readmeData.confirmContribution === 'yes') {
    return '- [Contribution](#contribution)';
  } else {
    return '';
  };
};

// adds contribution section
function contributionsSection(readmeData) {
  if (readmeData.confirmContribution === 'yes') {
    if(readmeData.contributionProfile === true){
    return `## Contribution
${readmeData.contribution}

![GitHub Contributors Image](https://contrib.rocks/image?repo=${readmeData.userName}/${readmeData.repoName})
    `;
    } else {
      return `## Contribution
${readmeData.contribution}
      
      `;
    };
  } else {
    return '';
  };
};

// adds Test Info to Table of Contents if it is needed
function testToC(readmeData) {
  if (readmeData.confirmTest === 'yes') {
    return '- [Test Info](#TestInfo)';
  } else {
    return '';
  };
};

// adds Test Info section
function testSection(readmeData) {
  if (readmeData.confirmTest === 'yes') {
    return `## Test Info
${readmeData.testInstructions}
    `;
  } else {
    return '';
  };
};

function frontendLanguagesSection(readmeData) {
  
  let frontArray = readmeData.frontEndLanguages;
  let languageBadges = ``;
  
  for (let i=0; i<frontArray.length; i++) {
    switch(frontArray[i]) {
      case 'Angular' :
        languageBadges += `![Angular](https://img.shields.io/badge/Angular-DD0031?plastic&logo=Angular&logoColor=white)`;
        break;
      case 'Bootstrap':
        languageBadges += `![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?plastic&logo=bootstrap&logoColor=white) `;
        break;
      case 'CSS':
        languageBadges += `![CSS](https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white)`;
        break;
      case 'HTML':
        languageBadges += `![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white) `;
        break;
      case 'JavaScript':
        languageBadges += `![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=plastic&logo=Javascript&logoColor=white)`;
        break;
      case 'jQuery': 
        languageBadges +=  `![JQuery](https://img.shields.io/badge/jQuery-0769AD?plastic&logo=jquery&logoColor=white)`;
        break;
      
      case 'React':
        languageBadges += `![React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)`;
        break;
      case 'React Router':
        languageBadges += `![React Router](https://img.shields.io/badge/React_Router-20232A?style=plastic&logo=react_router&logoColor=61DAFB)`;
        break;  
      
      case 'SASS':
        languageBadges += `![SASS](https://img.shields.io/badge/SASS-CC6699?style=plastic&logo=SASS&logoColor=white)`;
        break;
      case 'Swift':
        languageBadges += `![Swift](https://img.shields.io/badge/Swift-F05138?style=plastic&logo=Swift&logoColor=white)`;
        break; 
      case 'Vue':
        languageBadges += `![Vue](https://img.shields.io/badge/Vue.js-4FC08D?style=plastic&logo=Vue.js&logoColor=white)`;
        break;   
    }   
  };
  
  return `${languageBadges}`;
};

function backendLanguagesSection(readmeData) {
  
  
  let backArray = readmeData.backEndLanguages;
  let languageBadges = ``;
  
  for (let i=0; i<backArray.length; i++) {
    switch(backArray[i]) {
      case 'C++':
        languageBadges += `![C++](https://img.shields.io/badge/Cplusplus-404D59?style=plastic&logo=Cplusplus&logoColor=white)`;
        break;
      case 'Express':
        languageBadges += `![Express Js](https://img.shields.io/badge/Express.js-404D59?style=plastic&logo=Express&logoColor=white)`;
        break;
      case 'Java':
        languageBadges += `![Java](https://img.shields.io/badge/Java-F7DF1E?style=plastic&logo=Java&logoColor=white)`;
        break;  
      case 'JavaScript':
        languageBadges += `![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=Javascript&logoColor=white)`;
        break;
      
      case 'NodeJS': 
        languageBadges += `![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=plastic&logo=node.js&logoColor=white)`;
        break;
      case 'PHP':
        languageBadges += `![PHP](https://img.shields.io/badge/PHP-777BB4?style=plastic&logo=php&logoColor=white)`;
        break;
      case 'Python': 
      languageBadges += `![Python](https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white)`
      break;
      case 'Ruby':
        languageBadges += `![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=plastic&logo=ruby&logoColor=white)`;
        break;
      case 'Rust':
        languageBadges += `![Rust](https://img.shields.io/badge/Rust-000000?style=plastic&logo=Rust&logoColor=white)`;
        break; 
      case 'Solidity':
        languageBadges += `![Solitity](https://img.shields.io/badge/Solidity-363636?style=plastic&logo=Solidity&logoColor=white)`;
        break;   
    }  
  };
  
  return `${languageBadges}`;
};

function databaseSection(readmeData) {
  let databaseArray = readmeData.database;
  let databaseBadges = ``;
  
    switch(databaseArray) {
      case 'MongoDB' :
        databaseBadges += `![MongoDB](https://img.shields.io/badge/MongoDB-47A248?plastic&logo=MongoDB&logoColor=white)`;
        break;
      case 'MySQL' :
        databaseBadges += `![MySQL](https://img.shields.io/badge/MySQL-4479A1?plastic&logo=MySQL&logoColor=white)`;
        break;
      case 'Oracle' :
      databaseBadges += `![Oracle](https://img.shields.io/badge/Oracle-F80000?plastic&logo=Oracle&logoColor=white)`;
      break;
      case 'PostgreSQL' :
      databaseBadges += `![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?plastic&logo=PostgreSQL&logoColor=white)`;
      break;  
       
  };
  
  return `${databaseBadges}`;
};

//  Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `
  # ${readmeData.title}
  ${renderLicenseBadge(readmeData.license)}

  ![Open Issues](https://img.shields.io/github/issues-raw/${readmeData.userName}/${readmeData.repoName}?style=plastic)
  ![Closed Issues](https://img.shields.io/github/issues-closed-raw/${readmeData.userName}/${readmeData.repoName}?label=Closed%20Issues&style=plastic)
  ![Last Commit](https://img.shields.io/github/last-commit/${readmeData.userName}/${readmeData.repoName}?style=plastic)
  
  ## Description
  ${readmeData.description}

  ### Tools and Languages used
  ##### Frontend:
  ${frontendLanguagesSection(readmeData)}
  ##### Backend:
  ${backendLanguagesSection(readmeData)}
  ##### Database:
  ${databaseSection(readmeData)}
  ##### Tools:
  ${readmeData.tools}
  
  ## Table of Contents
  ${installationToC(readmeData)}
  ${usageToC(readmeData)}
  - [Screenshots](#screenshots)
  ${contributionsToC(readmeData)}
  ${testToC(readmeData)}
  - [Links](#links)
  
  ${installationSection(readmeData)}


  ${usageSection(readmeData)}

  ## Screenshots
  <img src="${readmeData.screenshot}">

  ${contributionsSection(readmeData)}

  ${testSection(readmeData)}

  ## Links
  GitHub Repository: https://github.com/${readmeData.userName}/${readmeData.repoName}

  GitHub URL: https://${readmeData.userName}.github.io/${readmeData.repoName}


![Made With](https://img.shields.io/badge/Made%20with-Ultimate%20README%20Generator-blue?style=plastic)

  &copy;2022 by Chris Burton
`;
}

module.exports = generateMarkdown;
