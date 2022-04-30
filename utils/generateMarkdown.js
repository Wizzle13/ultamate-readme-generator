// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Contributions](#contributions)
  - [Links](#links)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usageInfo}

  ## Screenshots

  ## Contributions
  ${data.contribution}

  ## Links
  GitHub Repository: https://github.com/${data.username}/${data.repoName}

  GitHub URL: https://${data.username}.github.io/${data.repoName}

`;
}

module.exports = generateMarkdown;
