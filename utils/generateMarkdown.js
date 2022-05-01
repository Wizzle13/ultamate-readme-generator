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
    return 'Skipped';
  };
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

`;
}

module.exports = generateMarkdown;
