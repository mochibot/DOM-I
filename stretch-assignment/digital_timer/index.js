//create start, stop and reset buttons and added styling
let startBtn = document.createElement('button');
let stopBtn = document.createElement('button');
let resetBtn = document.createElement('button');
let newDiv = document.createElement('div');
document.querySelector('body').style.flexDirection = 'column';
newDiv.setAttribute('style', 'display: flex; justify-content: space-around; width: 30%');
startBtn.textContent = 'Start';
stopBtn.textContent = 'Stop';
resetBtn.textContent = 'Reset';
startBtn.setAttribute('style', 'background: pink; color: white; border-radius: 5px; font-size: 1.2rem; margin: 20px 0; width: 80px; padding: 0.3rem 0')
stopBtn.setAttribute('style', 'background: pink; color: white; border-radius: 5px; font-size: 1.2rem; margin: 20px 0; width: 80px; padding: 0.3rem 0')
resetBtn.setAttribute('style', 'background: pink; color: white; border-radius: 5px; font-size: 1.2rem; margin: 20px 0; width: 80px; padding: 0.3rem 0')
newDiv.appendChild(startBtn);
newDiv.appendChild(stopBtn);
newDiv.appendChild(resetBtn);
document.querySelector('body').appendChild(newDiv);

//code for timer
let digits = document.querySelectorAll('.digits'); 
let timerVar;
let running = false;
let totalMS = 0; 

function timer() {
  totalMS += 10;

  document.getElementById('secondTens').innerHTML = Math.floor(totalMS / 10000);
  document.getElementById('secondOnes').innerHTML = Math.floor((totalMS % 10000) / 1000);
  document.getElementById('msHundreds').innerHTML = Math.floor((totalMS % 1000)/ 100);
  document.getElementById('msTens').innerHTML = Math.floor((totalMS % 100)/ 10);
  
  //stop the timer at 10 sec
  if (totalMS === 10000) {
    stopTimer();
    digits.forEach(item => item.style.color = 'red');
    startBtn.disabled = true;
    stopBtn.disabled = true;
  }  
}

function startTimer() {
    timerVar = setInterval(timer, 10);
    startBtn.disabled = true;  
    resetBtn.disabled = true;  
}

function stopTimer() {
  clearInterval(timerVar);
  startBtn.disabled = false;
  resetBtn.disabled = false;
}

function reset() {
  document.getElementById('secondTens').innerHTML = '-';
  document.getElementById('secondOnes').innerHTML = '-';
  document.getElementById('msHundreds').innerHTML = '-';
  document.getElementById('msTens').innerHTML = '-';
  digits.forEach(item => item.style.color = 'black');
  totalMS = 0;
  startBtn.disabled = false;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
}

startBtn.addEventListener('click', () => { 
  startTimer();  
});

stopBtn.addEventListener('click', () => {
  stopTimer();
});
resetBtn.addEventListener('click', () => {
  reset();
});
