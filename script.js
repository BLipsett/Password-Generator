var copy = document.getElementById("copy");
var result = document.getElementById("password");
var lower = document.querySelector("#lowerChoice");
var upper = document.getElementById("upperChoice");
var number = document.getElementById("numberChoice");
var symbol = document.getElementById("symbolChoice");
var lengthOption = document.getElementById("length");
var generateEl = document.getElementById("generate");



const optionFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol

}

copy.addEventListener("click", () => {
  let textArea = document.getElementById("password");
  textArea.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
});

generate.addEventListener("click", () => {
  const hasLower = lower.checked;
  const hasUpper = upper.checked;
  const hasNumber = number.checked;
  const hasSymbol = symbol.checked;
  const length = +lengthOption.value;

  result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});


function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  let typesCount = lower + upper + number + symbol;
  let typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);


  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      let funcname = Object.keys(type)[0];
      generatedPassword += optionFunc[funcname]();
    });
  }

  let finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  let symbols = "!@#$%^&*()_+-={}[]:<>?/.,/-"
  return symbols[Math.floor(Math.random() * symbols.length)];
}


/*function writePassword(max, min) {
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

});*/




/*function copyToClipboard() {
}
document.getElementById("copy").addEventListener("click", function () {
  let textArea = document.getElementById("password");
  password.select();
  document.execCommand("copy");


});*/

