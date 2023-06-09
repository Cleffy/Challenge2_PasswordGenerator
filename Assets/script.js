/*
Define characters
*/
const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const spec = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', '}', ']', '|', ';', ':', ',', '<', '>', '.', '/', '?'];

//Asks user for length of password
function getLength(){
  var length = Number(prompt("Please enter password length:", "8-128"));
  if(length < 8 || length > 128 || isNaN(length)){
    length = getLength();
  }
  return length;
}

// Randomly determines how many of each character type to use.
//   length: The length of the password.
//   charCase: an array of 4 booleans.
function determineTypeCount(length, charCase){
  var count = [0, 0, 0, 0];
  for(index in charCase){
    if(charCase[index]){
      count[index]++;
      length--;
    }
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
    charCase[0] = confirm("Do you want upper case letters?");
    charCase[1] = confirm("Do you want lower case letters?");
  }
  charCase[2] = confirm("Do you want numerical digits?");
  charCase[3] = confirm("Do you want special characters?");

  return randomCharacters(length, determineTypeCount(length, charCase));
}

// Area below provided by UCB Extension //
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Area above provided by UCB Extension //