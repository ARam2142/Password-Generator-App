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

//handler event
var textarea = document.getElementById('textarea');
var generate = document.getElementById('generate');

//event listener
generate.addEventListener('click', function(e){
  //your code
});
//create variables
var numbers = '0123456789';
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = " /\!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

console.log(generatePassword(12, letters));
//generate the characters
function generatePassword(length, characters) {
  //generate random characters
  var pw = '';
  for (let i = 0; i < i.length; i++) {
    pw += characters.charAt(Math.floor(Math.random() * characters.length));
    console.log(pw);
  }
  return pw;
}
