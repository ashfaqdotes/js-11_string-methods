// #1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt('Enter First Name: ');
let lastName = prompt('Enter Last Name: ');
let fullName = firstName +' '+ lastName;
document.write(`Greeting! ${fullName}`);

document.write('<hr>');

// #2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let userInput = prompt('Enter Your Favorite Phone!: ');
document.write(`Your Favorite Phone: ${userInput}`);
document.write(`<br>Length of String: ${userInput.length}`);
document.write('<hr>');

// #3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// let indexFind = prompt('Enter a Word to Find Index: ');
let indexFind = 'Pakistani';
let searchIndex = indexFind.indexOf('n');
document.write(indexFind);
document.write(`<br> Index of n: ${searchIndex}`);
document.write('<hr>');

// #4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let lastIndex = 'Hello World';
let searchLast = lastIndex.lastIndexOf('l');
document.write(`String: ${lastIndex}`);
document.write(`<br>last Index of 'l': ${searchLast}`);
document.write('<hr>');


// #5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
let wordString = 'Pakistani';
let findChar = wordString.charAt(3);
document.write(wordString);
document.write(findChar);
document.write('<hr>');

