var timer = null;
var countdownNumber = 10;

var changeStage = function(stage) {
    document.body.className = 'body-stage' +stage;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

    if (stage == 2) {
        timer = setInterval(function() {
            countdownNumber = countdownNumber-1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            if (countdownNumber <= 0) {
                changeStage(3);
            };
        }, 500);
    } else if (stage == 3) {
        var success = setTimeout(function()
        {
            var randomNumber = Math.round(Math.random()*10);

            console.log('randomNumber:', randomNumber)
            if (randomNumber > 5) {
                changeStage(4);
                new Audio('sounds/success.mp3').play()
            } else {
                changeStage(5);
                new Audio('sounds/boom.mp3').play()
            }
        }, 2000);
    };
}