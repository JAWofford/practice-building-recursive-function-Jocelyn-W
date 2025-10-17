//write a function named reverseString that takes a string as an input.
// return the string itself if it contains only one character.
// output should be the reverse of the string.

const readlineSync = require('readline-sync');

function reverseString (stringInput){
        
        if(stringInput.length <=1){
              return stringInput;//Base Case: return the string itself if it contains only one character (or is blank).
        } return stringInput.slice(-1) + reverseString(stringInput.slice(0,-1));//the last letter of the string + everything but the last letter.  This should decrease each recursion.
}

let word = readlineSync.question('Please enter a word:  ');
console.log(`Here is ${word} in reverse: ${reverseString(word)}`);

