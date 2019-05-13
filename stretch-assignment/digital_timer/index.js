let totalMS = 0; 
let timerVar = setInterval(timer, 10)
let digits = document.querySelectorAll('.digits'); 

function timer() {
  totalMS += 10;

  document.getElementById('secondTens').innerHTML = Math.floor(totalMS / 10000);
  document.getElementById('secondOnes').innerHTML = Math.floor((totalMS % 10000) / 1000);
  document.getElementById('msHundreds').innerHTML = Math.floor((totalMS % 1000)/ 100);
  document.getElementById('msTens').innerHTML = Math.floor((totalMS % 100)/ 10);
  

  if (totalMS === 10000) {
    clearInterval(timerVar);
    digits.forEach(item => item.style.color = 'red');
  }
}


