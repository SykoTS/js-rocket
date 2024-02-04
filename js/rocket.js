var timer = null;
var countdownNumber = 15;

var changeStage = function(stage) {
    document.body.className = 'body-stage' +stage;
    clearInterval(timer);
    countdownNumber = 15;
    document.getElementById('countdown').innerHTML = countdownNumber;

    if (stage == 2) {
        new Audio('sounds/rocket.mp3').play()
        timer = setInterval(function() {
            countdownNumber = countdownNumber-1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            
            if (countdownNumber > 8 && countdownNumber <= 11){
                document.getElementById('nervous').className = 'nervous show';
            } else {
                document.getElementById('nervous').className = 'nervous';
            };

            if (countdownNumber > 5 && countdownNumber <= 8){
                document.getElementById('cant-wait').className = 'cant-wait show';
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
            };
            


            if (countdownNumber <= 0) {
                changeStage(3);
            };
        }, 1000);
    } else if (stage == 3) {
        var success = setTimeout(function()
        {
            var randomNumber = Math.round(Math.random()*10);

            console.log('randomNumber:', randomNumber)
            if (randomNumber > 2) {
                changeStage(4);
                new Audio('sounds/success.mp3').play()
            } else {
                changeStage(5);
                new Audio('sounds/boom.mp3').play()
            }
        }, 2000);
    };
}