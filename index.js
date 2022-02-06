var time = document.querySelector(".timeCounter");
var startBtn = document.getElementById("startTimer");
var stopBtn = document.getElementById("stopTimer");
var resetBtn = document.getElementById("resetTimer");

var seconds = 0;
var interval = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function timer(){
  seconds++;

  var hrs = Math.floor((seconds/3600));
  var mins =Math.floor((seconds-(hrs * 3600))/60);
  var secs = ((seconds % 60)) ;

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }



time.innerText = `${hrs}:${mins}:${secs}`;

}


function start(){
  if (interval) {
    return
  }
  interval = setInterval(timer, 1000);

}

function stop(){
  clearInterval(interval);
  interval=null;
}

function reset(){
  stop();
  seconds=0;
  time.innerText ="00:00:00";
}
