/* Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
// BONUS EVENT LISTENER


function writePassword(max, min) {
    var passChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var passLength = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(passLength).fill(passChars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}
document.getElementById("generate").addEventListener("click", function () {
    randomPassword = writePassword(16, 8);
    document.getElementById("password").value = randomPassword;
});

