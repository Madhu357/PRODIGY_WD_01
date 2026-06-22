let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


let timer;


function start() {

    if (!timer) {

        timer = setInterval(updateTime, 10);

    }

}



function pause() {

    clearInterval(timer);

    timer = null;

}



function reset() {

    clearInterval(timer);

    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;


    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";


    document.getElementById("laps").innerHTML = "";

}



function updateTime() {


    milliseconds++;


    if (milliseconds == 100) {

        milliseconds = 0;
        seconds++;

    }


    if (seconds == 60) {

        seconds = 0;
        minutes++;

    }


    if (minutes == 60) {

        minutes = 0;
        hours++;

    }



    document.getElementById("hours").innerHTML =
        format(hours);


    document.getElementById("minutes").innerHTML =
        format(minutes);


    document.getElementById("seconds").innerHTML =
        format(seconds);


    document.getElementById("milliseconds").innerHTML =
        format(milliseconds);



}



function format(value) {

    return value < 10 ? "0" + value : value;

}



function lap() {

    let time =
        document.getElementById("hours").innerHTML +
        ":" +
        document.getElementById("minutes").innerHTML +
        ":" +
        document.getElementById("seconds").innerHTML +
        ":" +
        document.getElementById("milliseconds").innerHTML;


    let li = document.createElement("li");

    li.innerHTML = time;


    document.getElementById("laps").appendChild(li);

}