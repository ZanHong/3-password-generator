// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("How many characters would you like for your password? ");

// Making sure users inputs the correct password length
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Password length must be 8-128 characters! How many characters would you like? ")
}


// Prompt users for character type selection
var upperCase = confirm("Would you like to use uppercase letter?");
var lowerCase = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var specialChar = confirm("Would you like to use special characters?");


// Making sure users select at least 1 character type
if (!upperCase && !lowerCase && !numbers && !specialChar) {
  alert("You must use at least 1 character type!");
  upperCase = confirm("Would you like to use uppercase letter?");
  lowerCase = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  specialChar = confirm("Would you like to use special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var b = "abcdefghijklmnopqrstuvwxyz";
var c = "0123456789";
var d = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Function to generate password
function generatePassword() {
  var possiblePassword = "";
  var result = "";
  var y = parseInt(passwordLength);

  // The string of each conditions is added to an empty string called possiblePassword if the conditions are desired by the user
  if (upperCase) {
    possiblePassword += a;
  }

  if (lowerCase) {
    possiblePassword += b;
  }

  if (numbers) {
    possiblePassword += c;
  }

  if (specialChar) {
    possiblePassword += d;
  }
  
  // Goes through a For loop to generate a random character from the combined string based on the length its length
  for (var i = 0; i < y; i++) {
    result += possiblePassword.charAt(Math.floor(Math.random() * possiblePassword.length));
  }
  
  return result;
}

alert("Congratulations! Password generation with a length of " + passwordLength + " successful!\nPlease press the 'Generate Password' button to see your password. \nPress it again to generate another password of the same length. \nRefresh the page if you wish to change the password criteria.");