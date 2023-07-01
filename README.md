# Description!

Welcome to password generator. 
I created this application for anyone that needs asstiance with creating a password. 
Please note: still missing some if statements for when the user tries to not follow criteria

## Learning Points
Reminder: SAVE ON VSCODE BEFORE YOU GIT PUSH
came across an issue where I realized that I wasn't saving on my vscode and whenever I try to git add or git push origin main. The terminal would respond to me saying that I'm already up to-date. Which made no sense since I added so much context in between. Now I know that so whoever deicdes to read my code, they can understand what I did with clarity. I'm still not very confident in this practice, and will b

![Github example](assets/images/gitbash%20reminder.png)

Regarding code, I did my best in terms of putting it under one function rather than having multiple. Wanted to practice simplicity instead of having a whole bunch of code scattered. However creating a loop is what got me stuck because my application wasn't responding the way I wanted to. solved this by applying in the Code Refractor example.

# Code Refractor Example

 var randomPass = ''; 
  for (i=0; i<length; ++i) 
  var random = Math.floor(Math.random() * characters.length)
  // inside the loop the following code generates a random index to select a charcter from the 'charcters string'
    randomPass += characters.charAt(random);
  //this line appends a character to the "randomPass" string. 
  // we use chart.At function to retrieve the character at the 'random' index from the 'characters' string. and adds it to the 'randomPass' string


