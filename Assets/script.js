/*
Define characters
*/
const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const spec = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', '}', ']', '|', ';', ':', ',', '<', '>', '.', '/', '?'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Asks user for length of password
function getLength(){
  var length = Number(prompt("Please enter password length:", "8-128"));
  if(length < 8 || length > 128 || isNaN(length)){
    length = getLength();
  }
  return length;
}
//Asks user if they want to use Upper case letters.
function getUpperCase(){
  switch(prompt("Do you want an upper case letter?", "Y/N").toUpperCase()){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getUpperCase();
  }
}
//Asks user if they want to use Lower case letters.
function getLowerCase(){
    switch(prompt("Do you want an lower case letter?", "Y/N").toUpperCase()){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getLowerCase();
  }
}
//Asks user if they want to use numerical digits.
function getNumeric(){
    switch(prompt("Do you want numerical digits?", "Y/N").toUpperCase()){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getNumeric();
  }
}
//Asks user if they want to use special characters.
function getSpecial(){
    switch(prompt("Do you want special characters?", "Y/N").toUpperCase()){
    case "Y":
      return true;
    case "N":
      return false;
    default:
      return getSpecial();
  }
}

// Randomly determines how many of each character type to use.
//   length: The length of the password.
//   charCase: an array of 4 booleans.
function determineTypeCount(length, charCase){
  var count = [0, 0, 0, 0];
  if(charCase[0]){
      count[0]++;
      length--;
  }
  if(charCase[1]){
    count[1]++;
    length--;
  }
  if(charCase[2]){
    count[2]++;
    length--;
  }
  if(charCase[3]){
    count[3]++;
    length--;
  }

  while(length > 0){
    switch(Math.floor(Math.random() * 4)){
      case 0:
        if(charCase[0]){
          count[0]++;
          length--;
        }
        break;
      case 1:
        if(charCase[1]){
          count[1]++;
          length--;
        }
        break;
      case 2:
        if(charCase[2]){
          count[2]++;
          length--;
        }
        break;
      case 3:
        if(charCase[3]){
          count[3]++;
          length--;
        }
        break;
    }
  }
  return count;
}

// Randomly picks characters based on the parameters given.
//   length: The length of the password.
//   typeCount: An array of whole numbers of how many for each character type.
function randomCharacters(length, typeCount){
  var password = "";
  while(length > 0){
    switch(Math.floor(Math.random() * 4)){
      case 0:
        if(typeCount[0] > 0){
          password += char[Math.floor(Math.random() * char.length)].toUpperCase();
          typeCount[0]--;
          length--;
        }
      case 1:
        if(typeCount[1] > 0){
          password += char[Math.floor(Math.random() * char.length)];
          typeCount[1]--;
          length--;
        }
      case 2:
        if(typeCount[2] > 0){
          password += num[Math.floor(Math.random() * num.length)];
          typeCount[2]--;
          length--;
        }
      case 3:
        if(typeCount[3] > 0){
          password += spec[Math.floor(Math.random() * spec.length)];
          typeCount[3]--;
          length--;
        }
    }
  }
  return password;
}

//Generates a random password based on input given by the user.
function generatePassword(){
  var length = getLength();
  var charCase = [false, false, false, false];
  while(charCase[0] == false && charCase[1] == false){
    charCase[0] = getUpperCase();
    charCase[1] = getLowerCase();
  }
  charCase[2] = getNumeric();
  charCase[3] = getSpecial();

  return randomCharacters(length, determineTypeCount(length, charCase));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
