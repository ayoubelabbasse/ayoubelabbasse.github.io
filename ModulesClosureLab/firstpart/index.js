/*let timer = null; // stores ID of interval timer
function delayMsg2() {
    if (timer === null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
}
function rudy() { // called each time the timer goes off
    document.getElementById("output").innerHTML += " Rudy!";
}
*/
var rudyTimer=( function(){
        function rudy() { // called each time the timer goes off
            document.getElementById("output").innerHTML += " Rudy!";
        }
        let timer = null;
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
)

