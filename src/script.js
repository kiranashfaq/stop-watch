var time = document.getElementById("time");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var start = document.getElementById("start");

var seconds = 0;
var min = 0;
var hour = 0;

var interval;
start.addEventListener("click", function () {
  interval = setInterval(() => {
   seconds++
    if (seconds === 60) {
      seconds = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      seconds = 0
      hour++;
    }
  

   if (seconds<10) {
     seconds = "0" + seconds;
   }

     time.innerHTML = `${hour} : ${min} : ${seconds}`;
  }, 1000);
  })

;

stop.addEventListener("click", function () {
  clearInterval(interval);
});
reset.addEventListener("click" , function(){
    time.innerHTML = `00 : 00 : 00`;
    seconds = 0;
    min = 0;
    hour = 0;
    clearInterval(interval);  
})