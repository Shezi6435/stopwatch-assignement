let ms = 0;
let sec = 0;
let mins = 0;
let hrs = 0;

let timer = false;

function start(){
    timer = true;
    myFun();
}

function stop(){
    timer = false;
}

function reset(){
    location.reload();
}

function myFun(){
    if(timer === true) {
        ms += 1;
        if(ms === 100){
            sec += 1;
            ms = 0;
        }
        if(sec === 60){
            mins += 1;
            sec = 0;
        }
        if(mins === 60){
            hrs += 1;
            mins = 0;
        }

        let getSec = sec < 10 ? "0" + sec : sec;
        let getMins = mins < 10 ? "0" + mins : mins;
        let getHrs = hrs < 10 ? "0" + hrs : hrs;

        setTimeout(myFun, 10);
        document.getElementById("ms").innerHTML = ms;
        document.getElementById("sec").innerHTML = getSec;
        document.getElementById("mins").innerHTML = getMins;
        document.getElementById("hrs").innerHTML = getHrs;
    }
}

function lap() {
    // Capture current time in "HH:MM:SS:MS" format
    let lapTime = `Lap: ${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}:${sec < 10 ? "0" + sec : sec}:${ms < 10 ? "0" + ms : ms}`;
    let lapDiv = document.getElementById("laps");
    let lapEntry = document.createElement("div");
    lapEntry.innerHTML = lapTime;
    lapDiv.appendChild(lapEntry);
}
