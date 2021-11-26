const start = document.getElementById('startBtn');
start.addEventListener('click', startGame);

const playingFieldWidth = 500;
const playingFieldHeight = 300;
const ballWidth = 30;
const ballHeight = 30;
const ballPositionX = playingFieldWidth / 2;
const ballPositionY = playingFieldHeight / 2;
const ballRadius = ballWidth / 2;
const racketWidth = 10;
const racketHeight = 80;

const canvas = document.getElementById('canvas');
canvas.width = playingFieldWidth;
canvas.height = playingFieldHeight;
const ctx = canvas.getContext('2d');

function clearAll() {
    ctx.clearRect(0, 0, playingFieldWidth, playingFieldHeight);
}

function drawRect(x, y, width, height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
    ctx.closePath();
}

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}

const playingField = {
    width: playingFieldWidth,
    height: playingFieldHeight,
    color: '#F9F871',
    draw: function() {
        drawRect(0, 0, this.width, this.height, this.color);
    }
}

const playingBall = {
    positionX: ballPositionX,
    positionY: ballPositionY,
    radius: ballRadius,
    speedX: 0,
    speedY: 0,
    color: '#D65DB1',
    draw: function() {
        drawCircle(this.positionX, this.positionY, this.radius, this.color);
    },
    run: function() {
        this.positionX = ballPositionX;
        this.positionY = ballPositionY;
        this.speedX = 2;
        this.speedY = 2;
    }
}

const playerRacket1 = {
    width: racketWidth,
    height: racketHeight,
    positionX: 0,
    positionY: playingFieldHeight / 2 - racketHeight / 2,
    speed: 0,
    color: '#2C73D2',
    score: 0,
    draw: function() {
        drawRect(this.positionX, this.positionY, this.width, this.height, this.color);
    },
    scoreUpdate: function() {
        const count = document.getElementById('player1');
        count.innerHTML = this.score;
    }
}

const playerRacket2 = {
    width: racketWidth,
    height: racketHeight,
    positionX: playingFieldWidth - racketWidth,
    positionY: playingFieldHeight / 2 - racketHeight / 2,
    speed: 0,
    color: '#00C9A7',
    score: 0,
    draw: function() {
        drawRect(this.positionX, this.positionY, this.width, this.height, this.color)
    },
    scoreUpdate: function() {
        const count = document.getElementById('player2');
        count.innerHTML = this.score;
    }
}

function startGame() {
    playingBall.run();
}

function gameProcess() {

    playerRacket1.positionY += playerRacket1.speed;
    playerRacket2.positionY += playerRacket2.speed;

    document.onkeydown = function(event) {

        if(event.keyCode === 16) {
            playerRacket1.speed = -10;
        }

        if(event.keyCode === 17) {
            playerRacket1.speed = 10;
        }

        if(event.keyCode === 38) {
            playerRacket2.speed = -10;
        }

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

    if(playerRacket1.positionY <= 0) {
        playerRacket1.positionY = 0;
    }
    if(playerRacket2.positionY <= 0) {
        playerRacket2.positionY = 0;
    }

    if(playerRacket1.positionY + playerRacket1.height > playingField.height) {
        playerRacket1.positionY = playingField.height - playerRacket1.height;
    }
    if(playerRacket2.positionY + playerRacket2.height > playingField.height) {
        playerRacket2.positionY = playingField.height - playerRacket2.height;
    }

    playingBall.positionX += playingBall.speedX;
    playingBall.positionY += playingBall.speedY;

    if(playingBall.positionX + playingBall.radius > playingField.width) {
        playingBall.speedX = 0;
        playingBall.speedY = 0;
        playingBall.positionX = playingField.width - playingBall.radius;
        playerRacket1.score++;
        playerRacket1.scoreUpdate();
    }

    if(playingBall.positionX + playingBall.radius >= playerRacket2.positionX && playingBall.positionX <= playerRacket2.positionX + playerRacket2.width) {
        if(playingBall.positionY >= playerRacket2.positionY && playingBall.positionY <= playerRacket2.positionY + playerRacket2.height) {
            playingBall.speedX = -playingBall.speedX;
        }
    }

    if(playingBall.positionX - playingBall.radius < 0) {
        playingBall.speedX = 0;
        playingBall.speedY = 0;
        playingBall.positionX = 0 + playingBall.radius;
        playerRacket2.score++;
        playerRacket2.scoreUpdate();
    }

    if(playingBall.positionX - playingBall.radius <= playerRacket1.positionX + playerRacket1.width) {
        if(playingBall.positionY + playingBall.radius >= playerRacket1.positionY && playingBall.positionY - playingBall.radius <= playerRacket1.positionY + playerRacket1.height) {
            playingBall.speedX = -playingBall.speedX;
        }
    }

    if(playingBall.positionY + playingBall.radius > playingField.height) {
        playingBall.speedY = -playingBall.speedY;
        playingBall.positionY = playingField.height - playingBall.radius;
    }

    if(playingBall.positionY - playingBall.radius < 0) {
        playingBall.speedY = -playingBall.speedY;
        playingBall.positionY = 0 + playingBall.radius;
    }

    playingField.draw();
    playingBall.draw();
    playerRacket1.draw();
    playerRacket2.draw();

}

const game = setInterval(gameProcess, 1000 / 60);
