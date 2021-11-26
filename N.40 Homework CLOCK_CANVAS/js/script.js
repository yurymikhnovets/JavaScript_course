const createClockBtn = document.getElementById('create-btn');
createClockBtn.addEventListener('click', createCanvas);

function hide() {
    const inputField = document.querySelector('.input-field');
    inputField.style.display = 'none';
}

function createCanvas() {
    // Создание canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'clock';
    canvas.width = document.querySelector('#clock-size').value;
    canvas.height = document.querySelector('#clock-size').value;

    if(canvas.width && canvas.height <= 200) {
      canvas.width = 200;
      canvas.height = 200;
    } else if(canvas.width && canvas.height >= 800) {
      canvas.width = 800;
      canvas.height = 800;
    }

    document.body.appendChild(canvas);

    hide();

    // Запуск часов
    setTimeout(function run(){
        var time = new Date();
        var mSec = time.getMilliseconds();
        createClock();
        setTimeout(run, 1000 - mSec + 20);
    }, 20);
}

function createClock() {
    var clock = document.getElementById('clock');
    var ctx = clock.getContext('2d');

    const clockRadius= clock.width / 2 - 10;
    const clockCenterX = clock.width / 2;
    const clockCenterY = clock.height / 2;
    const clockWidth = clock.width;
    const clockHeight= clock.height;
  
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, clock.width, clock.height);  
  
    // Циферблат
    ctx.beginPath();
    ctx.fillStyle = '#FFC75F';
    ctx.lineWidth = 3;
    ctx.arc(clockCenterX, clockCenterY, clockRadius, 0, 2 * Math.PI, false);
    ctx.moveTo(clockCenterX,clockCenterY)
    ctx.fill();
    ctx.closePath();
  
    // Окружности для цифр
    for(var i = 1; i <= 12; i++) {
  
      var angle = parseFloat(i * 30) / 180 * Math.PI;
      var circleX = clockCenterX + (clockRadius - clockWidth / 10) * Math.sin(angle);
      var circleY = clockCenterY - (clockRadius - clockWidth / 10) * Math.cos(angle);
      var circleRadius = clockRadius / 10;
  
      ctx.beginPath();
      ctx.fillStyle = '#00C9A7';
      ctx.lineWidth = 2;
      ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI, false);
      ctx.moveTo(clockCenterX, clockCenterY)
      ctx.fill();
      ctx.closePath();
    }
  
    // Цифры на циферблате
    for(var i = 1; i <= 12; i++) {
  
      var angle = parseFloat(i * 30) / 180 * Math.PI;
      var numberX = clockCenterX + (clockRadius - clockWidth / 10) * Math.sin(angle);
      var numberY = clockCenterY - (clockRadius - clockWidth / 10) * Math.cos(angle);
      var numberSize = clockWidth / 12.9 + 'px';
  
      ctx.beginPath();
      ctx.fillStyle='#FEFEDF';
      ctx.font='italic normal ' + numberSize + ' Arial';
      if(i <= 9){
        ctx.fillText(i, numberX - clockWidth / 38.46, numberY + clockWidth / 38.46);
      } else {
        ctx.fillText(i, numberX - clockWidth / 20, numberY + clockWidth / 38.46);
      }
      ctx.closePath();
    }
  
    var time = new Date();
  
    var angleHour = (time.getHours() % 12) / 12 * 360 + time.getMinutes() / 60 * 30;
    var angleMinute = time.getMinutes() / 60 * 360;
    var angleSecond = time.getSeconds() / 60 * 360;
  
    // Стрелки
    var secondLength = clockRadius - clockRadius / 5.5;
    var minuteLength = clockRadius - clockRadius / 2.8;
    var hourLength = minuteLength / 1.25;
  
    // Часовая стрелка
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#2C73D2';
    ctx.moveTo(clockCenterX, clockCenterY);
    ctx.lineTo(clockCenterX + hourLength * Math.cos(Math.PI / 2 - angleHour * (Math.PI / 180)), clockCenterY - hourLength * Math.sin(Math.PI / 2 - angleHour * (Math.PI / 180)));
    ctx.stroke();
    ctx.closePath();	
  
    // Минутная стрелка
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#845EC2';
    ctx.moveTo(clockCenterX, clockCenterY);
    ctx.lineTo(clockCenterX + minuteLength * Math.cos(Math.PI / 2 - angleMinute * (Math.PI / 180)), clockCenterY - minuteLength  *Math.sin(Math.PI / 2 - angleMinute * (Math.PI / 180)));
    ctx.stroke();
    ctx.closePath(); 
  
    // Секундная стрелка
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF6F91';
    ctx.moveTo(clockCenterX, clockCenterY);
    ctx.lineTo(clockCenterX + secondLength * Math.cos(Math.PI / 2 - angleSecond * (Math.PI / 180)), clockCenterY - secondLength * Math.sin(Math.PI / 2 - angleSecond * (Math.PI / 180)));
    ctx.stroke();
    ctx.closePath();
  
    // Центр часов
    ctx.beginPath();
    ctx.fillStyle = '#4B4453';
    ctx.lineWidth = 1;
    ctx.arc(clockCenterX, clockCenterY, 5, 0, 2 * Math.PI, false);
    ctx.moveTo(clockCenterX, clockCenterY)
    ctx.fill();
    ctx.closePath();
  
    // Цифровые часы
    ctx.beginPath();
    ctx.fillStyle='#FEFEDF';
    ctx.fillText(time.toLocaleTimeString(), clockCenterX - clockWidth / 6, clockCenterY - clockHeight / 6);
    ctx.font='italic normal ' + numberSize + ' Arial';
    ctx.closePath();
  }