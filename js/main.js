`use strict`
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const settime = document.getElementById('settime');
 
  let selectedTime;
  let sec;
  let m;
  let s;
  let intervalId;


  function selectboxChange(){
    selectedTime = String(document.getElementById('settime').value).padStart(2, '0');
    timer.textContent = `${selectedTime}:00`;
    start.classList.remove('inactive');
  }


  function startTimer(){
    if (start.classList.contains('inactive') === true) {
       return;
    }

    sec = Number(document.getElementById('settime').value) * 60;
    setButtonStateRunning();
    intervalId = setInterval(() => {
      countDown();
    },1000);
  }

  function stopTimer(){
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateStopped();
    clearInterval(intervalId);
  }

  function resetTimer(){
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateInitial();
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

  function setButtonStateInitial() {
    settime.disabled = false;
    settime.selectedIndex = 0;
    start.classList.add('inactive');
    // stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateRunning() {
    settime.disabled = true;
    start.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  // function setButtonStateStopped() {
  //   settime.disabled = true;
  //   start.classList.remove('inactive');
  //   stop.classList.add('inactive');
  //   reset.classList.remove('inactive');
  // }

}