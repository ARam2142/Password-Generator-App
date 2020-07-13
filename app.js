//////////////////
/*Please use at your own risk, this password generator is still in development
you will not be able to select a length of your choice. You must check off the check boxes
in order to generate password. Thank you and apologies for the inconvience.
*/
//////////////////

//get elements by id
const inputUpper = document.getElementById('uppercheck');
const inputLower = document.getElementById('lowercheck');
const inputSymbol = document.getElementById('symcheck');
const inputNumber = document.getElementById('numcheck');
const inputLength = document.getElementById('passwordlength');

function generatePassword(){ 
  //stored characters
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let specials = '!@#$%^&*()-={}~`<>?';

  //set password length
  let passlength = ''

  //initialize password array
  let passwordArray = [];

  //variable holds random generated element from array
  let randomNum;

  //variable holds random generated number from string
  let randomNum2;

  //loop through the values of the characters
  for (let i = 0; i < 10; i++) {
    randomNum = Math.floor(Math.random() * 4);//generate random character from 4 variab
      
        if(inputUpper.checked) {
          randomNum2 = Math.floor(Math.random() * 21);
          passwordArray.push(uppercase[randomNum2]);
        }
        if(inputLower.checked) {
          randomNum2 = Math.floor(Math.random() * 21);
          passwordArray.push(lowercase[randomNum2]);
        } 
        if(inputSymbol.checked) {
          randomNum2 = Math.floor(Math.random() * 15);
          passwordArray.push(numbers[randomNum2]);
        } 
        if(inputNumber.checked) {
          randomNum2 = Math.floor(Math.random() * 10);
          passwordArray.push(specials[randomNum2]);
        }
      }
    
    //Now we have a password Array, we need to make this into a stirng and get it in the DOM
    const button = document.querySelector('#displayPassword');
    button.innerText = passwordArray.join('');
    
}

genButton = document.querySelector('.click');
genButton.addEventListener('click', function(e){
     e.preventDefault();
     generatePassword();
});

















///////////////solution 1 without the use of checkboxes and input
/*
function generatePassword(){ 
  //stored characters
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let specials = '!@#$%^&*()-={}~`<>?';
  
  //initialize password array
  let passwordArray1 = [];

  //variable holds random generated element from array
  let randomNum;

  //variable holds random generated number from string
  let randomNum2;

  //loop through the array given
  for (let i = 0; i < 15; i++) {
    randomNum = Math.floor(Math.random() * 4);//generate random character from 4 variables

    //switch statement will determine which numbers are push through
      switch(randomNum) {
        case 1:
        randomNum2 = Math.floor(Math.random() * 12);//random 12 characters are generated and held in randomNum2 variable
        passwordArray1.push(uppercase[randomNum2]);
        break;

        case 2:
        randomNum2 = Math.floor(Math.random() * 12);
        passwordArray1.push(lowercase[randomNum2]);
        break;

        case 3: 
        randomNumber2 = Math.floor(Math.random() * 12);
        passwordArray1.push(numbers[randomNum2]);
        break;

        case 4: 
        randomNumber2 = Math.floor(Math.random() * 12);
        passwordArray1.push(specials[randomNum2]);
        default:
      }
    }
  
    //Now we have a password Array, we need to make this into a stirng and get it in the DOM
    var button = document.querySelector('#displayPassword');
      button.innerText = passwordArray1.join('');
}

genButton = document.querySelector('.click');
genButton.addEventListener('click', function(e){
     e.preventDefault();
     generatePassword();
});
*/
