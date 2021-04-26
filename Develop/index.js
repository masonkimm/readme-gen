// getting necessary requires

var inquirer = require('inquirer');
var axios = require('axios');
var fs = require('fs');

// calling on questions via prompt
inquirer
  .prompt([
    {
      type: 'confirm',
      message:
        'Hi, Welcome to the ReadMe. Generator! Do you want to create a readMe file? ',
      name: 'confirmation',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username: ',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Enter a title for the README.md: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a brief description of the project: ',
      name: 'description',
    },
    {
      type: 'list',
      message: 'Do you want Table of Content? ',
      name: 'answer1',
      choices: ['Yes', 'No'],
    },
    {
      type: 'input',
      message: 'Enter Installation Process for your project: ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter Instructions and examples for use: ',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'List your collaborators: ',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'Enter the Year to put on the license: ',
      name: 'licenseYear',
    },
    {
      type: 'input',
      message: 'Enter the Name(s) to put on the license: ',
      name: 'licenseName',
    },
  ])
  .then((response) => {
    // declaring outputs with the user's input:(reponse)

    let output = `# ${response.title}` + '\n' + '\n';

    output += `## ${response.username}` + '\n';

    output +=
      '[https://github.com/' +
      `${response.username}` +
      '](https://github.com/' +
      response.username +
      ')' +
      '\n' +
      '\n';

    output +=
      '## Project Description:' +
      '\n' +
      '\n' +
      response.description +
      '\n' +
      '\n';
    // IF statement to display or not to display table of content depending on user input
    if (response.answer1.includes('Yes')) {
      output += '## Table of Contents:' + '\n' + '\n';
      output +=
        '* [Installation](#Installation)' +
        '\n' +
        '* [Usage](#Usage)' +
        '\n' +
        '* [Credits](#Credits)' +
        '\n' +
        '* [License](#License)' +
        '\n' +
        '\n';
    }
    output +=
      '## Installation:' + '\n' + '\n' + response.installation + '\n' + '\n';

    output += '## Usage: ' + '\n' + '\n' + response.usage + '\n' + '\n';

    output += '## Credits: ' + '\n' + '\n' + response.credits + '\n' + '\n';

    // declaring separate variable for license to concatanate(?) more easily. there were "" within the license
    const licenseMaterial =
      'MIT License Copyright(c) ' +
      response.licenseYear +
      ' ' +
      response.licenseName +
      '\n' +
      '\n' +
      'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files ' +
      '(' +
      'the ' +
      '"Software"' +
      ' )' +
      ', to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:' +
      '\n' +
      '\n' +
      'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.' +
      '\n' +
      '\n' +
      'THE SOFTWARE IS PROVIDED ' +
      '"AS IS"' +
      ',  WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';

    // declaring more outputs. These are placed here due to asynchrony(?)
    output += '## License: ' + '\n' + '\n' + licenseMaterial + '\n' + '\n';

    output +=
      '## Code Utilization: ' +
      '\n' +
      '\n' +
      `![${response.title}](https://img.shields.io/github/languages/top/${response.username}/${response.title})` +
      '\n';

    //social badge output
    // output += "## Badge: " + "\n" + "\n" + "![GitHub followers](https://img.shields.io/github/followers/"+ `${response.username}` + "?style=social)" + "\n" + "\n";

    // calling axios aka ajax by using user input: username
    const queryUrl = `https://api.github.com/users/${response.username}`;

    axios.get(queryUrl).then((response) => {
      // console.log(response)
      // let gitAvatar = (response.data.avatar_url)
      // let gitLink = (response.data.html_url);
      output += '## GitHub URL & Profile' + '\n';
      output += '[Link](' + response.data.html_url + ')' + '\n' + '\n';
      output += '![GitHub Avatar](' + response.data.avatar_url + ')' + '\n';

      // function to write allll the outputs created to README.md file
      fs.writeFile('README.md', output, (error) => {
        if (error) {
          return console.log(error);
        } else {
          console.log('>> README.md successfully generated! <<');
        }
      });
    });
  });

// const questions = [];

// function writeToFile(fileName, data) {}

// function init() {}

// init();
