const upperCaseCheck = document.querySelector('#uppercheck');
const lowerCaseCheck = document.querySelector('#lowercheck');
const specialCharCheck = document.querySelector('#specialcharcheck');
const numberCheck = document.querySelector('#numbercheck');
const generateBtn = document.querySelector('#generate');

//password character choices
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '0123456789'.split('');
const specials = '!@#$%^&*()-={}~`<>?'.split('');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

//generate password
function generatePassword () {
  
  //length of password from form
  const passwordLength = document.querySelector('#passwordlength').value;
  let passChar = passwordLength;
  
  //validate the length of password
  if (passwordLength.value < 8 || passwordLength.value > 128) {
    alert('your password is either too short or too long, do it again');
  }
  
  //initialize final password array
  let passwordArray = [];
  
  //initialize random password characters
  let randomPassword = [];

  if (upperCaseCheck.checked) {
    randomPassword = randomPassword.concat(uppercase);
  }
  
  if(lowerCaseCheck.checked) {
    randomPassword = randomPassword.concat(lowercase);
  }
  
  if (specialCharCheck.checked) {
    randomPassword = randomPassword.concat(specials);
  }
  
  if (numberCheck.checked) {
    randomPassword = randomPassword.concat(numbers);
  }

  //loop through each variable of characters
  //work cited: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript?page=1&tab=active#tab-top
  for (let i = 0; i < passChar; i++) {
    //generate random set of characters
    passwordArray.push(randomPassword[Math.floor(Math.random() * randomPassword.length)]);
    var createPassword = passwordArray.join('');
    
  }
  return createPassword;

}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  

  