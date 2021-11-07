var words = [
    "lake",
    "amazing",
    "pancake",
    "snow",
    "javascript",
    "art",
    "landscape"
];

function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}

var word = pickWord();

function setupAnswerArray(word) {
    var newArray = [];
    for (var i = 0; i < word.length; i++) {
        newArray[i] = "_";
    }
    return newArray;
}

var answerArray = setupAnswerArray(word);

function showPlayerProgress(array) {
    alert(array.join(" "));
}

var remainingLetters = word.length;



function getGuess() {
    return prompt("Guess a letter or click Cancel to stop game").toLowerCase();
}


function updateGameState(guess, word, answerArray) {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            console.log(answerArray[j]);
            remainingletters--;

        } console.log("Remaining letters: " + remainingLetters);
    } return answerArray;

}

function showAnswerAndCongratulatePlayer(answerArray) {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}


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

showAnswerAndCongratulatePlayer(answerArray);