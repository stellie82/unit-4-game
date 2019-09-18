$("document").ready(function () {
    console.log("Ready!");

    // Create a random number generator to pick between a value between 19 and 120.
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    var userNumber = 0;

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
            youWin();
        }

        // else if (targetNumber > userNumber) {
        //     youLose();
        // }

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