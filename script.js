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
while ((upperCase && lowerCase && numbers && specialChar) != true) {
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

function generatePassword() {
  // Generate random characters respectively
  function randomUpper () {
    return console.log(String.fromCharCode(Math.floor(Math.random() * 26 + 65)));
  }

  function randomLower() {
    return console.log(String.fromCharCode(Math.floor(Math.random() * 26 + 97)));

  }

  function randomNumber () {
    return console.log(String.fromCharCode(Math.floor(Math.random() * 10 + 48)));
  }

  function randomSpecial () {
    const special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    // not using String.fromCharCode here since the unicodes for special characters are not in a sequence unlike the above characters
    return  console.log(special[Math.floor(Math.random() * special.length)]);
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
