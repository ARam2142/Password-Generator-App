/*# password generator
  event listener
  - on click some button
  - someElem.addEventListener("click", function() {})
  prompt user for input
    1. num of char
     - validate user input for 8 > num < 129
     - validate for a number
    - bunch of booleans
  approaches for possible password chars
    1. build array for potential chars
      booleans if branches to add char
    2. acii ref for char
      - use random num for range within ascii char code for upper or lower, etc
  loop through length of pass to add a char to password
  finally displaying password*/

//inlcude password length, lowercase uppercase letters, numbers, special characters

//Password Generator
//event to trigger password
function buttonClick() {
  //code to have password appear
}
var el = document.getElementById('generatePassword');
el.addEventListener('click', buttonClick, false );

function generatePassword() {
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var specials = " /\!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

  

  
  

}