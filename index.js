// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateContent = require("./utility/generatContent");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project. What motivated you ? What did you learn? Why did you build it?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose all the licenses that applicable in this project",
    choices: ["MIT", "Apache", "BSD", "GNU", "Mozilla", "GPL"],
  },
  {
    type: "input",
    name: "email",
    message: "Please input your email",
  },
  {
    type: "input",
    name: "contributors",
    message: "List all the contributors. (Use github usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable...",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
];
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Success!, You can know preview your README file");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    writeToFile("README.md", generateContent(answers));
  });
}

// Function call to initialize app
init();
