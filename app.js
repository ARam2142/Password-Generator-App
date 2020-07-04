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

//variables declared
const numbers = '01234566789';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const Special_Chars = charlowtohigh(33, 126);

const submit = document.getElementById('submit')
const textarea = document.getElementById('textarea')

/*
textarea.addEventListener('submit', function(e) {
  //write code here
});*/

function generatePassword() {
  var string = fromCharCode(33);
}

function charlowtohigh(low, high) {
  const arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr;
}









/*
//create variables
var numbers = '0123456789';
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = " /\!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

console.log(generatePassword(12, numbers));


*/
