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

function generatePassword(characters){

const submit = document.getElementById('submit')
const textarea = document.getElementById('textarea').length;

//password characters
let numbers = '01234566789';
let UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let symbols = " /\!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

let pw = ""

//create for loop for selecting password characters
for (let i = 0; i <= characters.length; i++) {
  pw += characters.charAt(Math.floor(Math.round() * characters.length));
  console.log(characters.length)
}


}



/*
textarea.addEventListener('submit', function(e) {
  e.preventDefault()//write code here
  const password = generatePassword()
});*/











/*
//create variables
var numbers = '0123456789';
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = " /\!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

console.log(generatePassword(12, numbers));


*/
