// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectname}
  ![](https://img.shields.io/badge/License-${answers.license}-green)
  ## Table of Contents:
  - [Title](#Title)
  - [Description](#Description)
  - [Installation](#Installation)
  - [License](#License)
  - [Testing](#Testing)
  - [Questions](#Questions)

  ## Title
  ${answers.projectname}
  ## Description
  ${answers.desc}
  ## Installation
  ${answers.install}
  ## License
  ${answers.license}
  ## Testing
  ${answers.test}
  ## Questions
  If you have any questions, email me at ${answers.email}, or visit my GitHub page at https://github.com/ryanschuttig.
`;
}

module.exports = generateMarkdown;
