//get elements from html
const textarea = document.getElementById("password");

//store characters in variables
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#!$%^&*()_+?<>,.=-~`{}";

button.onclick = ()=> {
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += password.charAt(Math.floor(Math.round() * characters.length));
  }
}
textarea.value = password;

