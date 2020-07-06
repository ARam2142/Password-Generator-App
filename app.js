function generatePassword(){ 
  //stored characters are turned into arrays
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  lowercase = 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers = '0123456789'.split(''),
  specials = '!@#$%^&*()-={}~`<>?'.split('');
  
  //initialize password array
  passwordArray = [];

  //variable holds random generated number from 4 variables
  let randomNum;

  //variable holds random generated number from string
  let randomNum2;

  //password will combine all arrays into one and be final result
  let finalPassword;

  //loop through the array given
  for (let i = 0; i < 12; i++) {
    randomNum = Math.floor(Math.random() * 4);

    //if else statement will determine which numbers are push through
    if(randomNum == 0) {
      randomNum2 = Math.floor(Math.random() * 12);
      passwordArray.push(uppercase[randomNumber2]);

    } else if (randomNum == 1) {
      randomNum2 = Math.floor(Math.random() * 12);
      passwordArray.push(lowercase[randomNumber2]);

    } else if (randomNumber2 == 2) {
      randomNumber2 = Math.floor(Math.random() * 12);
      passwordArray.push(numbers[randomNum2]);
      conso

    } else if (randomNumber2 == 3) {
      randomNumber2 = Math.floor(Math.random() * 12);
      passwordArray.push(specials[randomNum2]);
    }

  }
  finalPassword = passwordArray.push(numbers, lowercase, uppercase, specials).join('');
  console.log(finalPassword)
};

