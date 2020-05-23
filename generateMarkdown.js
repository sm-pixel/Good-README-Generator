function generateMarkdown(data) {
    return `
# ${data.title}
![npm](https://img.shields.io/npm/v/inquirer?style=flat-square)
# Description 
${data.description}
# Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Please direct questions to ${data.username} or email ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  