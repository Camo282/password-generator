// Assignment code here
var minCharacter = 8
var maxCharacter = 128
var minTypes = 1

//Object and Array
var characters = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "=", ":", ";", "?", "/", ",", "."]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var selectedCharacters = []
  var length = prompt("Enter the length of your password between " + minCharacter + " and " + maxCharacter + ".")
  if (length < minCharacter || length > maxCharacter) {
    alert ("Password must be between " + minCharacter + " and " + maxCharacter + " .")
    generatePassword ()
  }
  var upperCase = confirm("Would you like to include uppercase letters?")
  var lowerCase = confirm("Would you like to include lowercase letters?")
  var specialSymbols = confirm("Would you like to include special symbols?")
  var numbers = confirm("Would you like to include numbers?")
  console.log (upperCase, lowerCase, specialSymbols, numbers)
  if (upperCase) {
    selectedCharacters.push(...characters.upper)
  }
  if (lowerCase) {
    selectedCharacters.push(...characters.lower)
  }
  if (numbers) {
    selectedCharacters.push(...characters.number)
  }
  if (specialSymbols) {
    selectedCharacters.push(...characters.special)
  }


  console.log(selectedCharacters);

  for (var i = 0; i <= generatePassword; i++) {
    var password = Math.floor(Math.random() * characters.length);
    password += characters.substring(selectedCharacters, selectedCharacters +1);
  }
}

document.getElementById("generate-password").value = password;
