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

  //initialize password array
  let passwordArray = [];

  //variable holds random generated element from array
  let randomNum;

  //variable holds random generated number from string
  let randomNum2;

  //loop through the values and get random characters
  for (let i = 0; i < 10; i++) {
    randomNum = Math.floor(Math.random() * 4);//generate random character from 4 variab
      
        //each button that is checked will generate a random set of characters
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

      /*This code does not
      if (document.getElementById('passwordlength').value.length < "8" || document.getElementById('passwordlength').value.length > "128") {
        alert('Please make sure your password is more than 8 characters and less than 128 characters');
        return false;
      } else {
        return true;
      }
      if (document.getElementById('passwordlength').value == "" || document.getElementById('passwordlength').value < "8" || document.getElementById('passwordlength').value > "128") {
        alert("Please introduce a valid length value! (6-50 characters)");
        return;
      }*/
}
/*
function passwordLength() {
  inputLength = document.getElementById('passwordlength').value;
  document.querySelector('#displayPassword').innerHTML = "" + inputLength;
  console.log(inputLength)
}*/

//event listener that will fire the click event on the generate button
var genButton = document.querySelector('.click');
genButton.addEventListener('click', function(e){
     e.preventDefault();
     generatePassword();
});