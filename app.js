function generatePassword(){ 
  //stored characters
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let specials = '!@#$%^&*()-={}~`<>?';
  
  //initialize password array
  passwordArray = [];

  //variable holds random generated element from array
  let randomNum;

  //variable holds random generated number from string
  let randomNum2;

  //loop through the array given
  for (let i = 0; i < 12; i++) {
    randomNum = Math.floor(Math.random() * 4);//generate random character from 4 variables

    //switch statement will determine which numbers are push through
      switch(randomNum) {
        case 1:
        randomNum2 = Math.floor(Math.random() * 12);//random 12 characters are generated and held in randomNum2 variable
        passwordArray.push(uppercase[randomNum2]);
        break;

        case 2:
        randomNum2 = Math.floor(Math.random() * 12);
        passwordArray.push(lowercase[randomNum2]);
        break;

        case 3: 
        randomNumber2 = Math.floor(Math.random() * 12);
        passwordArray.push(numbers[randomNum2]);
        break;

        case 4: 
        randomNumber2 = Math.floor(Math.random() * 12);
        passwordArray.push(specials[randomNum2]);
        default:
      }
    }

    //Now we have a password Array, we need to make this into a stirng and get it in the DOM
var button = document.querySelector('#password');

    button.innerText = passwordArray.join('');
}

var genButton = document.querySelector('.click');
genButton.addEventListener('click', function(e){
     e.preventDefault();
     generatePassword();
});

//default
function syncWindow(e) {
  e.preventDefault();
}