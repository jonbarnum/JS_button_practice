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