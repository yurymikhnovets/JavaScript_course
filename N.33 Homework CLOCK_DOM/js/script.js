const createClockBtn = document.getElementById('create-btn');
createClockBtn.addEventListener('click', createClock);

function hide() {
  const inputField = document.querySelector('.input-field');
  inputField.style.display = 'none';
}

function createClock() {
  let clockSize = document.getElementById('clock-size').value;

  if(clockSize <= 200) {
    clockSize = 200;
  } else if(clockSize >= 800) {
    clockSize = 800;
  }
  
  const clockField = document.getElementById('clock-field');
  const clockBigCircle = document.createElement('div');
  clockBigCircle.id = 'clock';
  clockBigCircle.style.width = clockSize + 'px';
  clockBigCircle.style.height = clockSize + 'px';
  clockBigCircle.style.borderRadius = '50%';
  clockBigCircle.style.backgroundColor = '#FFC75F';
  clockField.appendChild(clockBigCircle);

  hide();
  createDate();
  createNumCircle();
  createClockCenter();
  createHourArrow();
  createMinuteArrow();
  createSecondArrow();
  position();
  setArrows();
  
}

function createNumCircle() {
  const clockBigCircle = document.querySelector('#clock');
  for(let i = 1; i <= 12; i++) {
    const numCircle = document.createElement('div');
    numCircle.style.width = clockBigCircle.offsetWidth / 9 + 'px';
    numCircle.style.height = clockBigCircle.offsetHeight / 9 + 'px';
    const numCircleText = document.createTextNode(i)
    numCircle.appendChild(numCircleText);
    numCircle.id = 'num-circle';
    clockBigCircle.appendChild(numCircle);
    numCircle.style.fontSize = numCircle.offsetWidth / 1.5 + 'px';
    numCircle.style.borderRadius = '50%';
    numCircle.style.backgroundColor = '#00C9A7';
    numCircle.style.color = '#FEFEDF';
  }
}

function createClockCenter() {
  const clockBigCircle = document.getElementById('clock');
  const clockCenter = document.createElement('div');
  clockCenter.id = 'clock-center';
  clockCenter.style.width = 3 + 'px';
  clockCenter.style.height = 3 + 'px';
  clockCenter.style.borderRadius = '50%';
  clockCenter.style.backgroundColor = '#4B4453';
  clockCenter.style.zIndex = 10;
  clockBigCircle.appendChild(clockCenter);
}

function createHourArrow() {
  const clockBigCircle = document.getElementById('clock');
  const hourArrow = document.createElement('div');
  hourArrow.id = 'hour-arrow';
  hourArrow.style.width = 8 + 'px';
  hourArrow.style.height = clockBigCircle.offsetWidth / 3 + 'px';
  hourArrow.style.borderRadius = 15 + 'px';
  hourArrow.style.backgroundColor = '#2C73D2';
  clockBigCircle.appendChild(hourArrow);
}

function createMinuteArrow() {
  const clockBigCircle = document.getElementById('clock');
  const minuteArrow = document.createElement('div');
  minuteArrow.id = 'minute-arrow';
  minuteArrow.style.width = 5 + 'px';
  minuteArrow.style.height = clockBigCircle.offsetWidth / 2.5 + 'px';
  minuteArrow.style.borderRadius = 15 + 'px';
  minuteArrow.style.backgroundColor = '#845EC2';
  clockBigCircle.appendChild(minuteArrow);
}

function createSecondArrow() {
  const clockBigCircle = document.getElementById('clock');
  const secondArrow = document.createElement('div');
  secondArrow.id = 'second-arrow';
  secondArrow.style.width = 3 + 'px';
  secondArrow.style.height = clockBigCircle.offsetHeight / 2.1 + 'px';
  secondArrow.style.borderRadius = 50 + 'px';
  secondArrow.style.backgroundColor = '#FF6F91';
  clockBigCircle.appendChild(secondArrow);
}

function createDate() {
  const clockBigCircle = document.querySelector('#clock');
  const date = document.createElement('div');
  date.id = 'clock-date';
  date.style.width = 100 + '%';
  date.style.height = date.offsetHeight + 'px';
  date.style.color = '#FEFEDF';
  clockBigCircle.appendChild(date);
  date.style.fontSize = clockBigCircle.offsetHeight / 10 + 'px';
}

function position() {
  const clockBigCircle = document.querySelector('#clock');
  const numCircle = document.querySelectorAll('#num-circle');
  const clockCenter = document.querySelector('#clock-center');
  const hourArrow = document.querySelector('#hour-arrow');
  const minuteArrow = document.querySelector('#minute-arrow');
  const secondArrow = document.querySelector('#second-arrow');
  let clockDate = document.querySelector('#clock-date');

  const clockBigCircleCenterX = clockBigCircle.offsetWidth / 2;
  const clockBigCircleCenterY = clockBigCircle.offsetHeight / 2;

  clockDate.style.left = clockBigCircleCenterX - clockDate.offsetWidth / 2 + 'px';
  clockDate.style.top = clockBigCircleCenterY - clockBigCircleCenterY / 2 + 'px';

  clockCenter.style.left = clockBigCircleCenterX - clockCenter.offsetWidth / 2 + 'px';
  clockCenter.style.top = clockBigCircleCenterY - clockCenter.offsetHeight / 2 + 'px';

  hourArrow.style.left = clockBigCircleCenterX - hourArrow.offsetWidth / 2 + 'px';
  hourArrow.style.top = clockBigCircleCenterY - (hourArrow.offsetHeight * 0.9) + 'px';
  hourArrow.style.transformOrigin = 'center 90%';

  minuteArrow.style.left = clockBigCircleCenterX - minuteArrow.offsetWidth / 2 + 'px';
  minuteArrow.style.top = clockBigCircleCenterY - (minuteArrow.offsetHeight * 0.9) + 'px';
  minuteArrow.style.transformOrigin = 'center 90%';

  secondArrow.style.left = clockBigCircleCenterX - secondArrow.offsetWidth / 2 + 'px';
  secondArrow.style.top = clockBigCircleCenterY - (secondArrow.offsetHeight * 0.9) + 'px';
  secondArrow.style.transformOrigin = 'center 90%';

  for(let i = 0; i < numCircle.length; i++) {
    const angle = (-i * 30 - 210) / 180 * Math.PI;
    const radius = clockBigCircle.offsetWidth / 2.5;
    const numCircleCenterX = clockBigCircleCenterX + radius * Math.sin(angle);
    const numCircleCenterY = clockBigCircleCenterY + radius * Math.cos(angle);
    numCircle[i].style.left = numCircleCenterX - numCircle[i].offsetWidth / 2 + 'px';
    numCircle[i].style.top = numCircleCenterY - numCircle[i].offsetHeight / 2 + 'px';
  }

  const clock = setInterval(setArrows, 1000);

}

function setArrows() {
  const dateTime = new Date();
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();
  const second = dateTime.getSeconds();
  const angleHour = (hour % 12) / 12 * 360 + minute / 60 *30;
  const angleMinute = minute / 60 * 360;
  const angleSecond = second / 60 * 360;

  document.querySelector('#clock-date').innerHTML = dateTime.toLocaleTimeString();
  document.querySelector('#hour-arrow').style.transform = 'rotate(' + angleHour +'deg)';
  document.querySelector('#minute-arrow').style.transform = 'rotate(' + angleMinute +'deg)';
  document.querySelector('#second-arrow').style.transform = 'rotate(' + angleSecond +'deg)';

  console.log(dateTime.toLocaleTimeString());
}