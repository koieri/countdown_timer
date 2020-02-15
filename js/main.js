`use strict`
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const restart = document.getElementById('restart');
 
  let sec;
  let m;
  let s;
  let intervalId;

  function startTimer(){
    sec = Number(document.getElementById("settime").value) * 60;
    intervalId = setInterval(() => {
      countDown();
    },1000);
  }

  function stopTimer(){
    clearInterval(intervalId);
  }

  function resetTimer(){
    sec = 0;
    clearInterval(intervalId);
    timer.textContent = '00:00';
  }

  function countDown(){
    sec --;
    m = String(Math.floor(sec / 60)).padStart(2, '0');
    s = String(sec % 60).padStart(2, '0');
    timer.textContent = `${m}:${s}`;

    if (sec == 0){
      clearInterval(intervalId);
      document.getElementById('message').textContent = 'できあがり！';
    }
  }



}