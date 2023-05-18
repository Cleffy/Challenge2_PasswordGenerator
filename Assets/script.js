/*
Define characters
*/
const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const spec = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', '}', ']', '|', ';', ':', ',', '<', '>', '.', '/', '?'];

// Assignment Code
var generateBtn = document.querySelector("#generate");
function getLength(){
  var length = Number(prompt("Please enter password length:", "8-128"));
  if(length < 8 || length > 128 || isNaN(length)){
    length = getLength();
  }
  return length;
}

function getUpperCase(){
  var upperCase = prompt("Do you want an upper case letter?", "Y/N").toUpperCase();
  switch(upperCase){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getUpperCase();
  }
}
function getLowerCase(){
  var lowerCase = prompt("Do you want an lower case letter?", "Y/N").toUpperCase();
    switch(lowerCase){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getLowerCase();
  }
}
function getNumeric(){
  var numeric = prompt("Do you want numerical digits?", "Y/N").toUpperCase();
    switch(numeric){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getNumeric();
  }
}
function getSpecial(){
  var special = prompt("Do you want special characters?", "Y/N").toUpperCase();
    switch(special){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getSpecial();
  }
}

function generatePassword(){
  var password = "";
  var length = getLength();
  var upperCase = false;
  var lowerCase = false;
  while(upperCase == false && lowerCase == false){
    upperCase = getUpperCase();
    lowerCase = getLowerCase();
  }
  var numeric = getNumeric();
  var special = getSpecial();
  var upperCount = 0;
  var lowerCount = 0;
  var numericCount = 0;
  var specialCount = 0;
  if(upperCase){
    upperCount++;
    length--;
  }
  if(lowerCase){
    lowerCount++;
    length--;
  }
  if(numeric){
    numericCount++;
    length--;
  }
  if(special){
    specialCount++;
    length--;
  }
  while(length > 0){
    var charType = Math.floor(Math.random() * 4 + 1);
    switch(charType){
      case 1:
        if(upperCase){
          upperCount++;
          length--;
        }
        break;
      case 2:
        if(lowerCase){
          lowerCount++;
          length--;
        }
        break;
      case 3:
        if(numeric){
          numericCount++;
          length--;
        }
        break;
      case 4:
        if(special){
          specialCount++;
          length--;
        }
        break;
    }
  }
  password = String(upperCount) + String(lowerCount) + String(numericCount) + String(specialCount)
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
