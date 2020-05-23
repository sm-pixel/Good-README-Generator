const inquirer = require("inquirer")
const fs = require("fs")
const generate = require("./generateMarkdown")

inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "What is the name of your project?"
    },
    {
        name: "description",
        type: "input",
        message: "What is the discription of your project?"
    },
    {
        name: "installation",
        type: "input",
        message: "What command do you type to install this project/program?"
    },
    {
        name: "usage",
        type: "input",
        message: "What is this program used for?"
    },
    {
        name: "license",
        type: "input",
        message: "Are there any licenses for the project? If so, which one?"
    },
    {
        name: "contributing",
        type: "input",
        message: "Who are the authors/contributors for this project?"
    },
    {
        name: "tests",
        type: "input",
        message: "What command do you type to run a test?"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
]).then(data => {
    console.log(data)

    fs.writeFile('README.md', generate(data), err => {
        if (err) throw err
        console.log('readme created')
    })
})