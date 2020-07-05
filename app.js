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

function generatePassword(length){
  textarea = document.getElementById('textarea').innerHTML = makePassword(length);

}

let createPassword = function(length) {
  const numbers = '01234566789';
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = " /\!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

  let [lower, UPPER, num, sym] = [
    Math.round(length/4),
    Math.round(length/4),
    Math.round(length/4),
    length - 3 * Math.round(length/4),
  ]

  let passwordCharacters = shuffle ([
    ...getCharacters(lower, lowercase),
    ...getCharacters(UPPER, UPPERCASE),
    ...getCharacters(num, numbers),
    ...getCharacters(sym, symbols)
  ]);

  let password = passwordCharacters.join("");
  return password;
}

function getCharacters(length, string) {
  let characters = [];
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * string.length);
      characters[i] = string.charAt(random);
    }
    return characters;
}

function shuffle(array){
  return array.sort(() => Math.random() - 0.5);
}









/*
//create variables
var numbers = '0123456789';
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = " /\!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

console.log(generatePassword(12, numbers));


*/
