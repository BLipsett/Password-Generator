var copy = document.getElementById("copy");
var password = document.getElementById("password");
var lower = document.getElementById("#lowerChoice");
var upper = document.getElementById("#upperChoice");
var number = document.getElementById("#numberChoice");
var symbol = document.getElementById("#symbolChoice");
var lengthOption = document.getElementById("#Length");




var lowerCase = window.confirm("Lowercase character?")
if (lowerCase) {
  function writePassword()
} else {
  alert("next question")
};



function writePassword(max, min) {
  var passChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  var passLength = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(passLength).fill(passChars).map(function (x) {
    return x[Math.floor(Math.random() * x.length)]
  }).join('');

  return randPassword;
}
document.getElementById("generate").addEventListener("click", function () {
  randomPassword = writePassword(128, 8);
  document.getElementById("password").value = randomPassword;

});




function copyToClipboard() {
}
  document.getElementById("copy").addEventListener("click", function () {
    let textArea = document.getElementById("password");
    password.select();
    document.execCommand("copy");


  });

