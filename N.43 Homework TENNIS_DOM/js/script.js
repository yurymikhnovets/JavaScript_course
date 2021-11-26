const start = document.getElementById('startBtn');
start.addEventListener('click', startGame);

const playingFieldWidth = 500;
const playingFieldHeight = 300;
const ballWidth = 30;
const ballHeight = 30;
const racketWidth = 10;
const racketHeight = 80;

// Создание игрового поля
const playingFieldDiv = document.createElement('div');
playingFieldDiv.id = 'playingField';
document.body.appendChild(playingFieldDiv);

const playingField = {
    width: playingFieldWidth,
    height: playingFieldHeight,

    update: function() {
        const playingField = document.getElementById('playingField');
        playingField.style.width = this.width + 'px';
        playingField.style.height = this.height + 'px';
        playingField.style.backgroundColor = '#F9F871';
    }
}

// Создание теннисного мяча
const ballDiv = document.createElement('div');
ballDiv.id = 'playingBall';
playingFieldDiv.appendChild(ballDiv);

const playingBall = {
    width: ballWidth,
    height: ballHeight,
    positionX: playingFieldWidth / 2 - ballWidth / 2,
    positionY: playingFieldHeight / 2 - ballHeight / 2,
    speedX: 0,
    speedY: 0,

    update: function() {
        const playingBall = document.getElementById('playingBall');
        playingBall.style.left = this.positionX + 'px';
        playingBall.style.top = this.positionY + 'px';
        playingBall.style.width = this.width + 'px';
        playingBall.style.height = this.height + 'px';
        playingBall.style.borderRadius = '50%';
        playingBall.style.backgroundColor = '#D65DB1';
    },

    run: function() {
        this.positionX = playingFieldWidth / 2 - ballWidth / 2;
        this.positionY = playingFieldHeight / 2 - ballHeight / 2;
        this.speedX = 5;
        this.speedY = 5;
    }
}

// Создание 1-ой (левой) теннисной ракетки
const playerRacket1Div = document.createElement('div');
playerRacket1Div.id = 'playerRacket1';
playingFieldDiv.appendChild(playerRacket1Div);

const playerRacket1 = {
    width: racketWidth,
    height: racketHeight,
    positionX: 0,
    positionY: playingFieldHeight / 2 - racketHeight / 2,
    speed: 0,
    score: 0,

    update: function() {
        const playerRacket1 = document.getElementById('playerRacket1');
        playerRacket1.style.left = this.positionX + 'px';
        playerRacket1.style.top = this.positionY + 'px';
        playerRacket1.style.width = this.width + 'px';
        playerRacket1.style.height = this.height +'px';
        playerRacket1.style.backgroundColor = '#2C73D2';
    },

    scoreUpdate: function() {
        const count = document.getElementById('player1');
        count.innerHTML = this.score;
    }
}

// Создание 2-ой (правой) теннисной ракетки
const playerRacket2Div = document.createElement('div');
playerRacket2Div.id = 'playerRacket2';
playingFieldDiv.appendChild(playerRacket2Div);

const playerRacket2 = {
    width: racketWidth,
    height: racketHeight,
    positionX: playingFieldWidth - racketWidth,
    positionY: playingFieldHeight / 2 - racketHeight / 2,
    speed: 0,
    score: 0,

    update: function() {
        const playerRacket2 = document.getElementById('playerRacket2');
        playerRacket2.style.left = this.positionX + 'px';
        playerRacket2.style.top = this.positionY + 'px';
        playerRacket2.style.width = this.width + 'px';
        playerRacket2.style.height = this.height +'px';
        playerRacket2.style.backgroundColor = '#00C9A7';
    },

    scoreUpdate: function() {
        const count = document.getElementById('player2');
        count.innerHTML = this.score;
    }
}

// Запуск теннисного мяча
function startGame() {
    playingBall.run();
}

// Игровой процесс
function gameProcess() {

    // Движение теннисного мяча
    playingBall.positionX += playingBall.speedX;
    playingBall.positionY += playingBall.speedY;

    // Движение теннисных ракеток
    playerRacket1.positionY += playerRacket1.speed;
    playerRacket2.positionY += playerRacket2.speed;

    document.onkeydown = function(event) {
        // Движение вверх 1-ой теннисной ракетки (левой) - клавиша shift
        if(event.keyCode === 16) {
            playerRacket1.speed = -10;
        }
        // Движение вниз 1-ой теннисной ракетки (левой) - клавиша ctrl
        if(event.keyCode === 17) {
            playerRacket1.speed = 10;
        }
        // Движение вверх 2-ой теннисной ракетки (правой) - клавиша up
        if(event.keyCode === 38) {
            playerRacket2.speed = -10;
        }
        // Движение вниз 2-ой теннисной ракетки (правой) - клавиша down
        if(event.keyCode === 40) {
            playerRacket2.speed = 10;
        }
    }

    document.onkeyup = function(event) {
        if(event.keyCode === 16) {
            playerRacket1.speed = 0;
        }
        if(event.keyCode === 17) {
            playerRacket1.speed = 0;
        }
        if(event.keyCode === 38) {
            playerRacket2.speed = 0;
        }
        if(event.keyCode === 40) {
            playerRacket2.speed = 0;
        }
    }

    // Проверяем, вышли ли теннисные ракетки за пределы верхней стены
    if(playerRacket1.positionY <= 0) {
        playerRacket1.positionY = 0;
    }
    if(playerRacket2.positionY <= 0) {
        playerRacket2.positionY = 0;
    }

    // Проверяем, вышли ли теннисные ракетки за пределы нижней стены
    if(playerRacket1.positionY + playerRacket1.height > playingField.height) {
        playerRacket1.positionY = playingField.height - playerRacket1.height;
    }
    if(playerRacket2.positionY + playerRacket2.height > playingField.height) {
        playerRacket2.positionY = playingField.height - playerRacket2.height;
    }

    // Проверяем, ударился ли теннисный мяч об правую стену
    if(playingBall.positionX + playingBall.width > playingField.width) {
        playingBall.speedX = 0;
        playingBall.speedY = 0;
        playingBall.positionX = playingField.width - playingBall.width;
        playerRacket1.score++;
        playerRacket1.scoreUpdate();
    }

    // Проверяем, ударился ли теннисный мяч об левую стену
    if(playingBall.positionX < 0) {
        playingBall.speedX = 0;
        playingBall.speedY = 0;
        playingBall.positionX = 0;
        playerRacket2.score++;
        playerRacket2.scoreUpdate();
    }

    // Проверяем, ударился ли теннисный мяч об правую ракетку
    if(playingBall.positionX + playingBall.width >= playerRacket2.positionX && playingBall.positionX <= playerRacket2.positionX + playerRacket2.width) {
        if(playingBall.positionY >= playerRacket2.positionY && playingBall.positionY <= playerRacket2.positionY + playerRacket2.height) {
            playingBall.speedX = -playingBall.speedX;
        }
    }

    // Проверяем, ударился ли теннисный мяч об левую ракетку
    if(playingBall.positionX <= playerRacket1.positionX + playerRacket1.width) {
        if(playingBall.positionY + playingBall.height >= playerRacket1.positionY && playingBall.positionY <= playerRacket1.positionY + playerRacket1.height) {
            playingBall.speedX = -playingBall.speedX;
        }
    }

    // Проверяем, ударился ли мяч об нижнюю стену
    if(playingBall.positionY + playingBall.height > playingField.height) {
        playingBall.speedY = -playingBall.speedY;
        playingBall.positionY = playingField.height - playingBall.height;
    }

    // Проверяем, ударился ли мяч об верхнюю стену
    if(playingBall.positionY < 0) {
        playingBall.speedY = -playingBall.speedY;
        playingBall.positionY = 0;
    }

    playingField.update();
    playingBall.update();
    playerRacket1.update();
    playerRacket2.update();

}

const game = setInterval(gameProcess, 40);