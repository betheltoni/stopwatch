var time = document.querySelector(".timeCounter");
var startBtn = document.getElementById("startTimer");
var stopBtn = document.getElementById("stopTimer");
var resetBtn = document.getElementById("resetTimer");

var milliSeconds = 0;
var interval = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function timer(){
  milliSeconds++;

  var mins = Math.floor((milliSeconds/6000));
  var secs =Math.floor((milliSeconds-(mins * 6000))/100);
  var ms = ((milliSeconds % 100)-1) ;

  if (ms < 10) {
    ms = "0" + ms;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }



time.innerText = `${mins}:${secs}:${ms}`;

}


function start(){
  if (interval) {
    return
  }
  interval = setInterval(timer, 10);

}

function stop(){
  clearInterval(interval);
  interval=null;
}

function reset(){
  stop();
  milliSeconds=0;
  time.innerText ="00:00:00";
}
