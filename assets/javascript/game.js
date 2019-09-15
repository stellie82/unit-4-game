$("document").ready(function () {
    console.log("ready!");

    // Create a random number generator to pick between a value between 19 and 120.
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    var counter = 0;
    $("#score-number").text(counter);

    $("#target-number").text(targetNumber);
    console.log(targetNumber);

    var crystalValue;
    var crystalStore = [];
    var numberCrystals = $(".crystal-image").length;
    console.log(numberCrystals);

    function startGame() {
        for (i = 0; i < numberCrystals; i++) {
            crystalValue = Math.floor((Math.random() * 12) + 1);
            crystalStore.push(crystalValue);
            $(".crystal-image").attr("dataValue", crystalStore[i]);
            console.log(crystalStore);
        }
    }

    $(".crystal-image").on("click", function () {
        crystalValue = ($(this).attr("dataValue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        console.log(counter);
        $("#score-number").text(counter);
    });

startGame();
});