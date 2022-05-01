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
  # ${generateMarkdown.title}
  ## Description
  ${generateMarkdown.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Contributions](#contributions)
  - [Links](#links)

  ## Installation
  ${generateMarkdown.installation}

  ## Usage
  ${generateMarkdown.usageInfo}

  ## Screenshots

  ## Contributions
  ${generateMarkdown.contribution}

  ## Links
  GitHub Repository: https://github.com/${generateMarkdown.username}/${generateMarkdown.repoName}

  GitHub URL: https://${generateMarkdown.username}.github.io/${generateMarkdown.repoName}

`;
}

module.exports = generateMarkdown;
