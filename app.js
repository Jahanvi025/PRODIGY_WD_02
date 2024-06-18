let startTime;
let updatedTime;
let difference = 0;
let tInterval;
let running = false;

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.miliseconds');

function startTimer() {
  if (!running) {
    running = true;
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(getShowTime, 10); // update every 10 milliseconds
  }
}

function stopTimer() {
  if (running) {
    running = false;
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
  }
}

function resetTimer() {
  running = false;
  clearInterval(tInterval);
  difference = 0;
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
  milliseconds.textContent = '00';
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hoursVal = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesVal = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secondsVal = Math.floor((difference % (1000 * 60)) / 1000);
  let millisecondsVal = Math.floor((difference % 1000) / 10);

  hours.textContent = (hoursVal < 10) ? '0' + hoursVal : hoursVal;
  minutes.textContent = (minutesVal < 10) ? '0' + minutesVal : minutesVal;
  seconds.textContent = (secondsVal < 10) ? '0' + secondsVal : secondsVal;
  milliseconds.textContent = (millisecondsVal < 10) ? '0' + millisecondsVal : millisecondsVal;
}

function createLap() {
  const lapContainer = document.createElement('div');
  lapContainer.classList.add('lap');
  lapContainer.textContent = `${hours.textContent} : ${minutes.textContent} : ${seconds.textContent} : ${milliseconds.textContent}`;
  document.body.appendChild(lapContainer);
}

document.querySelector('.custom-btn:nth-child(1)').addEventListener('click', startTimer);
document.querySelector('.custom-btn:nth-child(2)').addEventListener('click', stopTimer);
document.querySelector('.custom-btn:nth-child(3)').addEventListener('click', resetTimer);
document.querySelector('.custom-btn:nth-child(4)').addEventListener('click', createLap);
