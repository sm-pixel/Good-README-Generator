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
To install run the code below in the terminal

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests

To install run the code below in the terminal

\`\`\`
${data.tests}
\`\`\`

## Questions
Please direct questions to [${data.username}](github.com/${data.username}) or email [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
