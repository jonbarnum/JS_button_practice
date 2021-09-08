let clicks = 0;

function incrementCounter () {
   clicks += 1;
   document.getElementById("readOut").innerHTML = clicks;
}

function decrementCounter (){
    clicks -= 1;
    document.getElementById("readOut").innerHTML = clicks;
}

function reset (){
    clicks = 0;
    document.getElementById("readOut").innerHTML = clicks;
}

// const timer = document.innerHTML("time");
// const start = document.innerHTML("startTime");
// const stop = document.innerHTML("stopTime");
// const reset = document.innerHTML("clearStopWatch");

// let time = 0,

// function showTime() {
//     time += 1;
//     timer.innerHTML = toHHMMSS(time);
// }

// function start() {
//     interval = setInterval(showtTime, 1000);
// }

// function stop() {
//     if (interval) {
//         clearInterval(interval);
//         interval = null;
//     }
// }