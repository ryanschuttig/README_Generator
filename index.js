const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// prompt questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "githubname",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is you email address?",
        },
        {
            type: "input",
            name: "projectname",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "desc",
            message: "Enter a description of your project.",
        },
        {
            type: "input",
            name: "install",
            message: "What installations are necessary for your project?",
        },
        {
            type: "list",
            name: "license",
            choices: [
                "ISC",
                "MIT",
                "Unlicensed",
            ]
        },
        {
            type: "input",
            name: "contribute",
            message: "Do you have any contributors to your project?",
        },
        {
            type: "input",
            name: "test",
            message: "Do you have any test instructions?",
        },
        {
            type: "input",
            name: "info",
            message: "Please list any other information here.",
        },
    ])
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
