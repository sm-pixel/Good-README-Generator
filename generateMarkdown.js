function generateMarkdown(data) {
    return `
# ${data.title}
### Description 
${data.description}
# Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)

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
  `;
  }
  
  module.exports = generateMarkdown;
  