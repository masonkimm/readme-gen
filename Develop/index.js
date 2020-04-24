// Getting requires

var inquirer = require("inquirer")
var axios = require("axios")
var fs = require("fs")
// var bs = require("./utils/generateMarkdown")

inquirer
.prompt([
  {
    type: "input", 
    message: "Enter your GitHub username. ",
    name: "username"
  },
  {
    type: "input", 
    message: "Enter a title for the README.md. ",
    name: "title"
  },
  {
    type: "input", 
    message: "Enter a brief description of the project: ",
    name: "description"
  },
  {
    type: "list", 
    message: "Do you want Table of Content? ",
    name: "answer1",
    choices:[
      "Yes",
      "No"
    ]
  },
  {
    type: "input", 
    message: "Enter Installation Process for your project: ",
    name: "installation"
  },
  {
    type: "input", 
    message: "Enter Instructions and examples for use: ",
    name: "usage"
  },
  {
    type: "input", 
    message: "List your collaborators:  ",
    name: "credits"
  },
  {
    type: "input", 
    message: "Enter the current Year to put on the license: ",
    name: "licenseYear"
  },
  {
    type: "input", 
    message: "Enter the Name to put on the license: ",
    name: "licenseName"
  },
  

]).then(response =>{

  let output = `# ${response.title}` + "\n" + "\n";

  output += `## ${response.username}` + "\n";
  output += "[https://github.com/sungjinkimm](https://github.com/"+ response.username+ ")" + "\n"+ "\n";

  output += "## Project Description:" + "\n" + "\n" + response.description + "\n" + "\n" ;

  if (response.answer1.includes("Yes")){
    output += "## Table of Contents:" + "\n" + "\n";
    output += "* [Installation](#Installation)"+ "\n" + "* [Usage](#Usage)"+ "\n" + "* [Credits](#Credits)"+ "\n" + "* [License](#License)" +"\n" + "\n" 
  }

  output += "## Installation:" + "\n" + "\n" + response.installation + "\n" + "\n";

  output += "## Usage: " + "\n" + "\n" + response.usage + "\n" + "\n";

  output += "## Credits: " + "\n" + "\n" + response.credits + "\n" + "\n";

  output += "## License: " + "\n" + "\n" + response.licenseYear + "\n" + "\n" + response.licenseName + "\n" + "\n";

  const licenceMaterial = 


  output += "## Badge: " + "\n" + "\n" + "![GitHub followers](https://img.shields.io/github/followers/"+ `${response.username}` + "?style=social)" + "\n" + "\n";

  const queryUrl = `https://api.github.com/users/${response.username}`;

  axios
  .get(queryUrl)
  .then(response =>{
  
  // console.log(response)
  let gitAvatar = (response.data.avatar_url)
  let gitLink = (response.data.html_url);
  output += "## GitHub URL & Profile" + "\n"
  output += "[GitHub URL]("+ gitLink + ")"+ "\n"+ "\n"
  output += "![GitHub Avatar]("+ gitAvatar + ")"+ "\n"


  fs.writeFile("README.md", output, (error)=>{
    if (error){
      return console.log(error)
    } else{
      console.log("README.md generated")
    }
  })
  })
    
})

// // function to WRITE username and to create README file
// let writeName = (msgName) => {
//   fs.writeFile("README.md", msgName, function(err){
//     if(err){
//       return console.log(err)
//     }
//     return console.log("success! README.md Generated!")
//   })
// }

// // function to APPEND title to README
// let appendTitle = (msgTitle) => {
//   fs.appendFile("README.md", msgTitle, (err)=>{
//     if(err){
//       return console.log(err)
//     }
//   })
// }

// // function to APPEND description to README
// let appendDescription = (msgDescription) => {
//   fs.appendFile("README.md", msgDescription,(err)=>{
//     if(err){
//       return console.log(err)
//     }
//   })
// }

// function to call github AJAX
// let ajaxCall = ({username})=>{
//   const queryUrl = `https://api.github.com/users/${username}`
//   axios
//   .get(queryUrl)
//   .then(response =>{

//     let gitLink = ("GitHub Url: "+response.config.url) + "\r\n";

//     // console.log(response)
//     fs.appendFile("README.md", gitLink,(err)=>{
//       if(err){
//         return console.log(err)
//       }
//     })
//   })
// }


  // console.log("username: "+ response.username)
  // console.log(queryUrl)

  // axios
  // .get(queryUrl)
  // .then(response => {
  //   const repoNames = response.data.map(repo=> {
  //     return repo.name
  //   })
    // fs.writeFile("README.md", repoNames.join("\n"), (err) => {
    //   if(err){
    //     return console.log(err)
    //   }
    //   console.log("Success! README.md will be generated.")
    // })


// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
const questions = [

];

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();
