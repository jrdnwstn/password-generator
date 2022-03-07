// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  

  var userInput = window.prompt("Choose Password Length")

  var passwordLength= parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Not a number")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length has to be betweeen 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like numbers in your password?")
  var userWantsSymbols = window.confirm ("Would you like to have symbols in your password?")
  var userWantsUppercase = window.confirm ("Would you like to have uppercase letters in your password?")
  var userWantsLowercase = window.confirm ("Would you like to have lowercase letters in your password?")
 
  var numberList = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"]
  var symbolList = ["!", "@", "$", "&", "#", "?"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = []

if (userWantsNumbers === true) {
  optionsCart.push(numberList)

}
if (userWantsSymbols === true) {
  optionsCart.push(symbolList)
}
if (userWantsUppercase === true) {
  optionsCart.push(uppercaseList)
}
if (userWantsLowercase === true) {
  optionsCart.pus(lowercaseList)
}
console.log(optionsCart)



}


  

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
