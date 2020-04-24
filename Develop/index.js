// Getting requires

var inquirer = require("inquirer")
var axios = require("axios")
var fs = require("fs")

inquirer
.prompt([
  {
    type: "input", 
    message: "Enter your GitHub username",
    name: "username"
  },
  {
    type: "input", 
    message: "Enter a title for the README.md",
    name: "title"
  },
  {
    type: "input", 
    message: "Enter a brief description of the project",
    name: "description"
  },

]).then(response =>{
  let msgName = ("GitHub Username: " + response.username) +"\n";
  let msgTitle = ("Title: " + response.title)+ "\n";
  let msgDescription = ("Project Description: " + response.description)+ "\n";
  
  writeName(msgName);
  ajaxCall(response);
  appendTitle(msgTitle);
  appendDescription(msgDescription)
})

// function to WRITE username and to create README file
let writeName = (msgName) => {
  fs.writeFile("README.md", msgName, function(err){
    if(err){
      return console.log(err)
    }
    return console.log("success! README.md Generated!")
  })
}

// function to APPEND title to README
let appendTitle = (msgTitle) => {
  fs.appendFile("README.md", msgTitle, (err)=>{
    if(err){
      return console.log(err)
    }
  })
}

// function to APPEND description to README
let appendDescription = (msgDescription) => {
  fs.appendFile("README.md", msgDescription,(err)=>{
    if(err){
      return console.log(err)
    }
  })
}

// function to call github AJAX
let ajaxCall = ({username})=>{
  const queryUrl = `https://api.github.com/users/${username}`
  axios
  .get(queryUrl)
  .then(response =>{

    let gitLink = ("GitHub Url: "+response.config.url) + "\r\n";

    // console.log(response)
    fs.appendFile("README.md", gitLink,(err)=>{
      if(err){
        return console.log(err)
      }
    })
  })
}


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
