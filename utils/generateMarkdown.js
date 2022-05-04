var languageBadges ='';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  if (readmeData.confirmUsage === 'yes') {
    return '- [Usage](#usage)';
  } else {
    return '';
  };
};
// adds Usage section
function usageSection(readmeData) {
  if (readmeData.confirmUsage === 'yes') {
    return `## Usage
${readmeData.Usage}
    `;
  } else {
    return '';
  };
};

// adds Contribution to Table of Contents if it is needed
function contributionsToC(readmeData) {
  if (readmeData.confirmcontribution === 'yes') {
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

function languagesSection(readmeData) {
  
  switch(readmeData.languages) {
    case 'Bootstrap':
      languageBadges += `![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?plastic&logo=bootstrap&logoColor=white) `;
      break;
    case 'HTML':
      languageBadges += `![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white) `;
    
    default:
      languageBadges +=  `![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white) `;
      
  };
  console.log (languageBadges);
  return `${languageBadges}`;
};
//  Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `
  # ${readmeData.title}

  [![License: ${readmeData.license}](https://img.shields.io/badge/License-${readmeData.license}-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)


  ${readmeData.license}
  ## Description
  ${readmeData.description}
  ${readmeData.languages}
  ${languagesSection(readmeData)}

  ## Table of Contents
  ${installationToC(readmeData)}
  ${usageToC(readmeData)}
  - [Screenshots](#screenshots)
  ${contributionsToC(readmeData)}
  - [Contributions](#contributions)
  - [Links](#links)
  
  ${installationSection(readmeData)}


  ${usageSection(readmeData)}

  ## Screenshots

  ${contributionsSection(readmeData)}

  ## Links
  GitHub Repository: https://github.com/${readmeData.userName}/${readmeData.repoName}

  GitHub URL: https://${readmeData.userName}.github.io/${readmeData.repoName}


![Made With](https://img.shields.io/badge/Made%20with-Ultimate%20README%20Generator-blue?style=plastic)

  &copy;2020 by Chris Burton
`;
}

module.exports = generateMarkdown;
