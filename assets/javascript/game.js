// Set global variables for the game.
var targetNumber;
var userNumber;
var crystalValue;
var numberCrystals;
var endGame;
var wins = 0;
var losses = 0;

// Create a function to start the game.
function startGame() {
    // Create a random number generator to pick between a value between 19 and 120.
    targetNumber = Math.floor((Math.random() * 120) + 19);
    userNumber = 0;
    endGame = false;

    // Create a variable to hold the number of crystals based on images shown on the page.
    numberCrystals = $(".crystal-image").length;
    console.log("Number of crystals: " + numberCrystals);

    $('.crystal-image').each(function (i) {
        // Generate a random number for each crystal with a value between 1 and 12.
        crystalValue = Math.floor((Math.random() * 12) + 1);
        console.log(crystalValue);
        $(this).attr("dataValue", crystalValue);
        console.log("Set crystal " + i + " to " + crystalValue);
    });

    // Display the user's score and random target number.
    $("#target-number").text(targetNumber);
    console.log("Target number: " + targetNumber);

    $("#score-number").text(userNumber);
    console.log("User score: " + userNumber);
};

// Create parameters for winning or losing the game based on the user's click.
$(".crystal-image").on("click", function () {
    console.log("test onclick");
    if (userNumber < targetNumber) {
        crystalValue = $(this).attr("dataValue");
        crystalValue = parseInt(crystalValue);
        userNumber += crystalValue;
        $("#score-number").text(userNumber);
    }

    if (endGame) {
        startGame();
    }

    else if (targetNumber === userNumber) {
        wins++;
        $("#wins").text(wins);
        endGame = true;
        alert("You win!");
    }

    else if (userNumber > targetNumber) {
        losses++;
        $("#losses").text(losses);
        endGame = true;
        alert("Sorry, better luck next time...");
    }
});

$("document").ready(startGame);