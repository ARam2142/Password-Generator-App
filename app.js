//select button from html
const generateBtn = document.querySelector('#generate');

//element to display password
const displayPassword = document.querySelector('#password');

function generatePassword(){
  //stored values
  let uppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789'
  let specials = '!@#$%^&*()-={}~`<>?';

  //values put into arrays
  uppercaseSplit = uppercase.split('');
  lowercaseSplit = lowercase.split('');
  numbersSplit = numbers.split('');
  specials = numbers.split('');
  console.log(numbers.split(''))
  array = [];


  let password = ''

  for (let i = 0; i < 12; i++) {
    password += values.charAt(Math.floor(Math.random() * values.length))
  }

}