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
    randomNum = Math.floor(Math.random() * 4);

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
}

var button = document.querySelector('#password');
    button.addEventListener('click', function(e){
    e.target.style.background = 'green';
});

//default
function syncWindow(e) {
  e.preventDefault();
}