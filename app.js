


function generatePassword(){
  //stored values
  let uppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let numbers = '0123456789'.split('')
  let specials = '!@#$%^&*()-={}~`<>?'.split('');

  //hold new variable
  array = [];

  let randomPass;
  let randomPass2;

  for (let i = 0; i < 12; i++) {
    randomPass += Math.floor(Math.random() * 4);

    if(randomPass == 0) {
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(uppercase[randomPass2]);
    } else if(randomPass == 1) {
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(lowercase[randomPass2]);
    } else if(randomPass == 2) {
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(numbers[randomPass2]);
    } else if (randomPass == 3)
      randomPass2 = Math.floor(Math.random() * 12);
      array.push(specials[randomPass2]);
  }

}