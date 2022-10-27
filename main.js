/*
function getRandomLowercase() {
  //för random lower case
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97) //finns string method fromCharCode
  //html ascii charsets googla, 97 strå för bokstav a
}
*/

//console.log(getRandomLowercase());

//hämtar elements
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('lenght');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');
//const symbolsElement = document.getElementById('symbols');

const randomFuction = {
  //each function ska få key - lower, upper, number och symbol
  lower: getRabdomLower, //key som har sin egna funktion
  upper: getRabdomUpper,
  number: getRabdomNumber,
  symbol: getRabdomSymbol
}

clipboardElement.addEventListener('click', () => {
  const password = resultElement.innerText;

  if(!password) {
    return;
  }

  navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
})

generateElement.addEventListener('click', () => {
  const lenght = +lengthElement.value //+converts to string
  const hasLower = lowercaseElement.checked
  const hasUpper = uppercaseElement.checked
  const hasNumber = numbersElement.checked
  const hasSymbol = symbolElement.checked
  //console.log(lenght, hasLower, hasUpper, hasNumber, hasSymbol);

  resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lenght)
  //console.log(resultElement);
 
})

//använder key values
function generatePassword(lower, upper, number, symbol, lenght) {
  let generatedPassword = ''; //det som kommer in
  const typesCount = lower + upper + number + symbol //hur många check boxes är markerat, får resultat om consolar
  //console.log("Du har markerat ", typeCount, " checkboxes");
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item=>Object.values(item)[0]);

  //filtrerar allt som har false value, borjar från 1 dvs [0].
  //filter(item => Object.values(item)[0])
  console.log(typesArr);

  if(typesCount === 0) {
    return '' //nothing empty string
  }
  
  for(let i = 0; i < lenght; i += typesCount) {
    typesArr.forEach(type => {
      //console.log(type);
      const funcName = Object.keys(type)[0]
      //console.log(funcName);

      generatedPassword += randomFuction[funcName]()
      console.log(generatedPassword);
      
    })
  }
  //från 0 till 20 dv 0, lenght som vi deklarerat
  const finalPassword = generatedPassword.slice(0, lenght);

  return finalPassword;

}

function getRabdomLower( lenght=1, charsets = 'abcdefghijklmnopqrstuvwxyz'){
  return charsets.charAt(Math.floor(Math.random() * charsets.length));
}
//console.log(getRabdomLower());

function getRabdomUpper( lenght=1, charsets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'){
  return charsets.charAt(Math.floor(Math.random() * charsets.length));
}
//console.log(getRabdomUpper());

function getRabdomNumber( lenght=1, charsets = '0123456789'){
  return charsets.charAt(Math.floor(Math.random() * charsets.length));
}
//console.log(getRabdomNumber());

function getRabdomSymbol( lenght=1, charsets = '!@#$%^&*(){}=<>/,.'){
  return charsets.charAt(Math.floor(Math.random() * charsets.length));
}
//console.log(getRabdomSymbol());

//eller
/* function getSymbols() {
  const symbols = '!@#$%^&*(){}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getSymbols()); */