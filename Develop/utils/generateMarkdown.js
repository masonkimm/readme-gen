
// -- HEY LOOK!! They gave us a FUNCTION... SO YOU BETTER USE IT *HINT HINT* 
function generateMarkdown(data) {
  return `
# ${data.title}

`;
}


// -- Here we are making our FUNCTION available outside (EXPORTING) of this file -- //
module.exports = generateMarkdown;
// -- NOTICE: that we are adding this function to the 'module.exports' OBJECT -- //

