document.getElementById('password').addEventListener("click", generate);

function generate() {
  document.getElementById('password').innerHTML = generatePassword();
}

function generatePassword(){ 
  //stored characters are turned into arrays
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase = 'abcdefghijklmnopqrstuvwxyz',
  numbers = '0123456789',
  specials = '!@#$%^&*()-={}~`<>?';
  
  //initialize password array
  passwordArray = [];

  //variable holds random generated number from 4 variables
  let randomNum;

  //variable holds random generated number from string
  let randomNum2;

  //loop through the array given
  for (let i = 0; i < 12; i++) {
    randomNum = Math.floor(Math.random() * 4);

    //if else statement will determine which numbers are push through
    if(randomNum == 0) {
      randomNum2 = Math.floor(Math.random() * 12);
      passwordArray.push(uppercase[randomNum2]);

    } else if (randomNum == 1) {
      randomNum2 = Math.floor(Math.random() * 12);
      passwordArray.push(lowercase[randomNum2]);

    } else if (randomNum == 2) {
      randomNumber2 = Math.floor(Math.random() * 12);
      passwordArray.push(numbers[randomNum2]);

    } else if (randomNum == 3) {
      randomNumber2 = Math.floor(Math.random() * 12);
      passwordArray.push(specials[randomNum2]);
    }
  }
  document.querySelector("#password").innerHTML = passwordArray.join('');
}
generatePassword();
