// Inicjalizacja canvas i kontekstu
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Wymiary gracza
var playerWidth = 50;
var playerHeight = 50;
var playerX = (canvas.width - playerWidth) / 2;
var playerY = canvas.height - playerHeight;
var playerSpeed = 5;

// Sterowanie
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

// rysowanie spadających obiektów

var osbtacle = {
    x: 20,
    y: 20,
    width: 20,
    height: 50
}

function drawObstacle() {
    ctx.beginPath();
    ctx.rect(osbtacle.x, osbtacle.y, osbtacle.width, osbtacle.height);
    ctx.fillStyle = "red"
    ctx.fill();
    ctx.closePath();
}

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, playerY, playerWidth, playerHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

var score = 0;

function detectCollision() {
    // Check for collision between player and obstacle
    if (playerX < osbtacle.x + osbtacle.width &&
        playerX + playerWidth > osbtacle.x &&
        playerY < osbtacle.y + osbtacle.height &&
        playerY + playerHeight > osbtacle.y) {
        return true;
    } else {
        return false;
    }
}

function detectCollisionObsCanvas() {
    if (osbtacle.y + osbtacle.height > canvas.height) {
        return true;
    } else {
        return false;
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawObstacle();
    drawScore();

    if (rightPressed && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    } else if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
    if (detectCollision()) {
        score++;
        console.log(score);
        osbtacle.x = Math.random() * (canvas.width - osbtacle.width);
        osbtacle.y = -osbtacle.height;
        if (score > 9) {
            alert("You win");
        }
    }
    if (detectCollisionObsCanvas()) {
        alert("You lose");
    }

    if (osbtacle.y < canvas.height) {
        osbtacle.y += 2;
    }
    if (osbtacle.y === canvas.height) {
        osbtacle.y = 0;
    }

    requestAnimationFrame(update);
}

update();
