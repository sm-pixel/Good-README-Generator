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
]).then(data =>{
    console.log(data)

fs.writeFile('README.md', generate(data), err=>{
    if(err) throw err
    console.log('readme created')
})
})