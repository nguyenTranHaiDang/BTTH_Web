window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendTens = 
    document.getElementById('tens')
    var appendsSeconds = 
    document.getElementById('seconds')
    var buttonStart =

    document.getElementById('button-start');
    var buttonStart = 
    document.getElementById('button-start');
    var buttonReset = 
    document.getElementById('button-reset');

    var Internal;
    buttonStart.onclick = function(){
        clearInterval(Internal);
        Internal = setInterval(startTimes, 10);
    }

    buttonReset.onclick = function(){
        clearInterval(Internal);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendsSeconds.innerHTML = seconds;
    }

    function startTimes(){
        tens++;

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            console.log("seconds");
            seconds++;
            appendsSeconds.innerHTML = "0" +
            seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9) {
            appendsSeconds.innerHTML = seconds;
        }
    }
}