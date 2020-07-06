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
  specials = specials.split('');

  //hold new variable
  array = [];

  let randomPass;
  let randomPass2;

  for (let i = 0; i < 12; i++) {
    randomPass += Math.floor(Math.random() * 4);

    if(randomPass == 0) {
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(uppercaseSplit[randomPass2]);
    } else if(randomPass == 1) {
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(lowercasecSplit[randomPass2]);
    } else if(randomPass == 2) {
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(numbersSplit[randomPass2]);
    } else (randomPass == 3)
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(specialsSplit[randomPass2]);
  }

}