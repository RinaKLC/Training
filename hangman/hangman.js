function pickWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
    var newArray = [];
    for (var i = 0; i < word.length; i++) {
        newArray[i] = "_";
    }
    return newArray;
}

function showPlayerProgress(array) {
    alert(array.join(" "));
}

function getGuess() {
    return prompt("Guess a letter or click Cancel to stop game").toLowerCase();
}

function updateGameState(guess, word, answerArray) {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            console.log(answerArray[j]);
            remainingLetters--;

        } console.log("Remaining letters: " + remainingLetters);
    } return answerArray;
}

function showAnswerAndCongratulatePlayer(answerArray) {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}


function playGame() {
    while (remainingLetters > 0) {
        showPlayerProgress(answerArray);

        var guess = getGuess();
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter only one letter");
        } else {
            var correctGuesses = updateGameState(guess, word, answerArray);
            remainingLetters -= correctGuesses;
            console.log(remainingLetters);
        }
    }
}

var words = [
    "lake",
    "amazing",
    "pancake",
    "snow",
    "javascript",
    "art",
    "landscape"
];

var word = pickWord(words);
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

playGame();
showAnswerAndCongratulatePlayer(answerArray);