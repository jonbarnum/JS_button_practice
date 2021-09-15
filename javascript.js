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


// learning from https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7

let miliSec = 0;
let sec = 0;
let min = 0;
let hr = 0;

let stopWatch;

document.getElementById ('start').onclick = () => start ();
document.getElementById ("stop").onclick = () => stop ();
document.getElementById ('clear').onclick = () => clear ();

function start (){
    stop();
    stopWatch = setInterval (() => {timer(); }, 10);
}

function stop (){
    clearInterval (stopWatch);
}

function clear (){
    hr = 0;
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById ('hour').innerHTML = '00';
    document.getElementById ('minute').innerHTML = '00';
    document.getElementById ('seconds').innerHTML = '00';
    document.getElementById ('milliseconds').innerHTML = '000';
}

function timer (){
    if ((miliSec += 10) == 1000) {
        miliSec = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hr++;
    }
    document.getElementById ('hour').innerHTML = returnData(hr);
    document.getElementById ('minute').innerHTML = returnData (min);
    document.getElementById ('seconds').innerHTML = returnData (sec);
    document.getElementById ('milliseconds').innerHTML = returnData (miliSec);
}

function returnData (input) {
    return input > 10 ? input : `${input}`
}