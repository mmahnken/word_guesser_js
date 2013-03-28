
var word = ['H', 'O', 'M', 'E'];
var answer = [];
var guessed = [];


function guessLetter(letter) {
    
    for (var i = 0; i < word.length; i = i + 1) {
        if (word[i] === letter) {
            answer[i] = letter;
            break;
        } else {
            continue;
              
        }
        } 
    guessed.push(letter);
    var letters_remaining = word.length - answer.length;
    console.log("Here are the letters you\'ve guessed so far: " + guessed);
    console.log("You have " + letters_remaining + " left to guess.");
    console.log("Here is the answer so far: " + answer);          
    console.log('Guess again, you!');
            
        }  
    
guessLetter('H');