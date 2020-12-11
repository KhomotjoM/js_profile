var secretNumber = 7;
var myBtn = document.getElementById("guessGame");
myBtn.onclick = askQuestion;

function askQuestion() {
    var userInput = prompt("Guess a number between 1 & 10");
    var guess = parseInt(userInput);
    checkAnswer(guess);
}


function checkAnswer(guess) {
    while (guess != secretNumber) {
        if (guess < secretNumber) {
            alert("Incorrect! yYu are too low.");
            askQuestion();
        } else if (guess > secretNumber) {
            alert("Incorrect! You are too High.");
            askQuestion();
        } else {
            alert("Sorry, Try again");
            askQuestion();
        }
    }
    alert("you are correct");
}