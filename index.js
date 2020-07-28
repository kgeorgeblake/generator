const fs = require("fs");
const inquirer = require("inquirer");


const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
      },
      {
      type: "input",
      message: "Describe the what of your project. Describe they why of your project. Describe the how of your project",
      name: "description"
      },
    

        {
            type: "input",
            message: "What did you learn from creating this project?",
            name: "learningprocess"
            },
    

      {
      type: "input",
      message: "Enter any installation instructions",
      name: "installation"
      },
      {
      type: "input",
      message: "Enter usage information",
      name: "usage"
      },
      {
      type: "input",
      message: "Enter contribution guidelines",
      name: "contribution"  
      },
      {
      type: "input",
      message: "Enter test instructions",
      name: "test"  
      }
  ]);
}



//function to generate a README for the user
function generateREADME(answers) {
return`# ${answers.title}
## Description
${answers.description}


## Installation
${answers.installation}

## Learning
${answers.learningprocess}

## Usage
${answers.usage}
## Credits
## License
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
## Contributing 
${answers.contribution}
## Tests
${answers.test}
`
;
}
promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);
    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });