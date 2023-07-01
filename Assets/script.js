// Assignment Code

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//function writePassword is incomplete, since it calls for a 'generatePassword' function to obtain the password and then sets the value of an HTML element with the id "password" to the generated password. 
//to make this functional, we must create a function for 'generatePassword' 

function generatePassword () { 
  // create prompt for password cirteria
var length = prompt("What's the desired length of your random password? *Must be more than 8 characters") ;
  // create ifs statement for when the user fails to submit the requirements of 8 characters. 
  // creat else statement for when they complete 
  if (length < 8 || length > 128) {
    alert("failure. *hint: must be more than 8 characters.");
    return "refresh and try again"; 
  } else {
  alert("Your password length: " + length) ;
}

  // create variables for all the characters that will be used in generator 
  // create variables for the user upon choice of confirm
  var characters = ""; 
  var lowercaseChar = confirm("Apply lowercase letters?");
  var uppercaseChar = confirm("Apply uppercase letters");
  var numbersChar = confirm("Apply Numbers?");
  var specialChar = confirm("Apply Special Characters? (hint: +,-,!)"); 
  

  // create an if statement for when the user selects the criteria for his/her desired password.
  // *strings - applying confirmation from the user will create value for the strings* i think?

  if(lowercaseChar) { 
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if(uppercaseChar) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if(numbersChar) {
    characters += "0123456789";
  }

  if(specialChar) {
    characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  // created variable to coorelate to the empty string 
  // the application of this loop will assign each character in the characters variable 
  // ask tutor if what happens if they press cancel for all charactes regarding loop. what's a better  if statement?
  var randomPass = ''; 
  for (i=0; i<length; ++i) {
  
    var random = Math.floor(Math.random() * characters.length)
  // inside the loop the following code generates a random index to select a charcter from the 'charcters string'
    randomPass += characters.charAt(random);
  //this line appends a character to the "randomPass" string. 
  // we use chart.At function to retrieve the character at the 'random' index from the 'characters' string. and adds it to the 'randomPass' string
  
  
  }
 
  return randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
