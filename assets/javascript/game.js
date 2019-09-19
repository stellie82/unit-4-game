$("document").ready(function () {
    console.log("Ready!");

    // Create a random number generator to pick between a value between 19 and 120.
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    var userNumber = 0;
    var wins = 0;
    var losses = 0;

    // Display the user's score and random target number.
    $("#target-number").text(targetNumber);
    console.log(targetNumber);

    $("#score-number").text(userNumber);
    console.log(userNumber);

    // Set variables for each crystal's value as well as the number of crystals based on images.
    var crystalValue;
    var numberCrystals = $(".crystal-image").length;
    console.log(numberCrystals);

    // Create a function to start the game.
    function startGame() {
        $('.crystal-image').each(function (i) {
            // Generate a random number for each crystal with a value between 1 and 12.
            crystalValue = Math.floor((Math.random() * 12) + 1);
            console.log(crystalValue);
            $(this).attr("dataValue", crystalValue);
            console.log("Set crystal " + i + " to " + crystalValue);
        });

        $(".crystal-image").on("click", function () {
            crystalValue = $(this).attr("dataValue");
            crystalValue = parseInt(crystalValue);
            userNumber += crystalValue;
            console.log(userNumber);
            $("#score-number").text(userNumber);
        });

        if (targetNumber === userNumber) {
            wins++;
            youWin();
            $(".wins").text(wins);
        }

        else if (userNumber > targetNumber) {
            losses++;
            console.log(losses);
            $(".losses").text(losses);
            youLose();
        }

    };

    // Create a function for when the user wins the game.
    function youWin() {
        alert("You win!");
    }

    // Create a function for when the user loses the game.
    function youLose() {
        alert("You lose!");
    }


    startGame();

});