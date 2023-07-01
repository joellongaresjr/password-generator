// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Declares variables password sets it equal to a function call. That function is called generatePassword().
  var password = generatePassword();
  //This declares variable passwordText and sets that equal to the grabbed dom element with the id of password. Grabs that element using query selector.
  var passwordText = document.querySelector("#password");
  //Sets variable passwordText's value equal to the generated password.
  passwordText.value = password;
  //this line is to give the alert a delay so the user sees the password and is then told they can regenerate simply by clicking the button.
  setTimeout(function() {
    alert("Click generate to try again");
  }, 900);
}

//The function above calls a generatePassword() function but one is not written so i declare it here.
function generatePassword() {
  //This creates a variable length which is equal too whatever the user puts in teh prompt.
  var length = prompt("How many characters long?");
  //This if else statement states that if the chosen password length is below 8 or above 128 character long that they are unable to do that.
  //Tf not (else) and the parameters are met the password variable length is applied and it alerts the user how long they set their password to.
    if ( length < 8 || length > 128 ) {
      alert("Password must be between 8 and 128 characters long, refresh the page and start over.");
      return "try again.";
    } else {
      alert("Password length set to " + length);
    }
    //These variables are all for the characters used. Characters is an empty string that we are going to put the characters into.
    //The other variables are set equal to the users choice on confirm. 
    var characters = ""; 
    var lowercase = confirm("Use lowercase letters in password? Ok for yes cancel for no.");
    var uppercase = confirm("Use uppercase letters in password? Ok for yes cancel for no.");
    var numbers = confirm("Use numbers in password? Ok for yes cancel for no.");
    var specialChar = confirm ("Use special characters in password (ie. $,\ %,\ '\)? Ok for yes cancel for no.");
    //If they confirm those parameters then these strings is added the the empty characters string (note it is added not equal to). If they hit cancel those characters are not used.
    if (lowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if(uppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(numbers) {
      characters += "1234567890";
    }
    if(specialChar) {
      characters += "~!@#$%^&*()-_=+[{]}|;:'\"\,\<\.>/?";
    }
    //This sets a variable called randomPassword equal to an empty string that we can put our randomly generated password into.
  var randomPassword = '';
    //This for loop will examine each character in the characters variable (whose string to choose from is set equal to the users selections of characters) one by one. 
  for (i=0; i<length; ++i) {
    //This variable is equal to an equation to gives a random number. 
    //Math.random() generates a random decimal between 0-1 then multiplies that random decimal by the length of the characters string. 
    //Math.floor() rounds that down to the nearest whole integer.
    var random = Math.floor(Math.random() * characters.length)
    //This line looks at the characters variable which is now a string and applies the charAt() string method with an argument of random.
    //It grabs that randomly selected character out of the characters string and then adds that to the empty randomPassword string(note add not equal to).
    randomPassword += characters.charAt(random);
  }
  //This now simply returns that randomly generated password
  return randomPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);