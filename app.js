const displayPassword = document.querySelector('#displaypassword');
const passwordLengthInput = document.querySelector('#passwordlength');
const upperCaseCheck = document.querySelector('#uppercheck');
const lowerCaseCheck = document.querySelector('#lowercheck');
const specialCharCheck = document.querySelector('#specialcharcheck');
const numberCheck = document.querySelector('#numbercheck');
const generateBtn = document.querySelector('.click');

//password character choices
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const specials = ['!','@','#','$','%','^','&','*','(',')','-','=','{','}','~','`','<','>','?'];


let passwordArray = [];

function generatePassword() {
  for (let i = 0; i < passwordArray; i++) {
    
  }
}

//initialize passwordlength array
let passwordLengh = [];

function validatePasswordLength() {
  //check validation of passwordlength
  if (passwordLengthInput.value < 8) {
    alert("password is too short");
  } 
  else if(passwordLengthInput.value > 128) {
    alert("password is too long");
  }
}

//initializes variable if user checks a box
let userChecksBox = [];

//checks if checkboxes were checked
function validateCheckBoxes() {
  userChecksBox = [];

  if (upperCaseCheck.checked) {
    userChecksBox.concat(uppercase);
    console.log(userChecksBox.concat(uppercase));
  }
  
  if(lowerCaseCheck.checked) {
    userChecksBox.concat(lowercase)
    console.log(userChecksBox.concat(lowercase));
  }
  
  if (specialCharCheck.checked) {
    userChecksBox.concat(specials)
    console.log(userChecksBox.concat(specials));
  }
  
  if (numberCheck.checked) {
    userChecksBox.concat(numbers)
    console.log(userChecksBox.concat(numbers));
  }
  
  else if (!upperCaseCheck.checked && !lowerCaseCheck.checked && !specialCharCheck.checked && !numberCheck.checked) {
    alert('you have to check a box first moron')
  }
}
  
  
  
generateBtn.addEventListener('click', function(e){
  e.preventDefault();
  validatePasswordLength();
  validateCheckBoxes();
  generatePassword();
});
  
  