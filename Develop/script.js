// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = []

function generatePassword(){
  var passLength = parseInt(prompt("Password length, Please choose between 8 - 128 characters",""));
  //a. Password length
  if (passLength < 8 || passLength > 128){
    alert('Please choose a value between 8 and 128.');
    return 'Please try again.'
  }
  if (isNaN(passLength)){
    alert('Please choose a numeric value between 8 and 128.')
    return 'Please try again.'
  }
  if (passLength === ''){
    alert('Please enter a number')
    return 'Please try again.'
  }

  //prompt choices 
  // validate the inputs 
  if(confirm('Include lowercase letters?')){
    characters = characters.concat('abcdefghijklmnopqrstuvwxyz'.split(''))
  }
   if(confirm('Include Uppercase letters?')){
    characters = characters.concat('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))
   }
   if(confirm('Include special characters?')){
    characters = characters.concat('!@#$%^&*'.split(''))
   }
  if(confirm('Include numbers?')){
    characters = characters.concat('1234567890'.split(''))
  }
  if(characters.length === 0){
    alert('Please select one of the character choices.')
    return 'Please try again.';
  }
  
  // generate password based on the choices made 
  var passArray = []

  for(var i = 0; i < passLength; i++){
    var index = Math.floor (Math.random() * characters.length);
    var digit = characters[index]
    passArray.push(digit)
  }
  
  // display password to the page 
  return passArray.join('')
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword() 
   
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

