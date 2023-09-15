// Ceating a function that returns a license badge bases on which license is passed in

function licenseBadge(license) {
  if (license !== "none") {
    return `![Github licenses](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return "";
  }
}

//function to execute the answers and readme page
function generateContent(answers) {
  return `
    # ${answers.title}

    https://github.com/${answers.username}/${answers.title}
    
    ${licenseBadge(answers.license)}

    #Description

    ${answers.description}

    # Table Of Contents
    * [Installation](#installatoin)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Test](#test)
    * [Questions](#questions)
    
    # Installation
    ${answers.installation}
    
    # Usage
    The usage of this is ${answers.usage}
    
    # Credits
    Contributors: ${answers.contributors}
    
    #license 
    This project is under the ${answers.license} license
    
    # Test
    The following is need to run the test: ${answers.test}
    
    # Question
    If you have any questions about this project email: ${answers.email}
`;
}
module.exports = generateContent;
