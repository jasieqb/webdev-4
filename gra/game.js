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

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, playerY, playerWidth, playerHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function update() {
    // Czyszczenie canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();

    // Aktualizacja pozycji gracza
    if (rightPressed && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    } else if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }

    requestAnimationFrame(update);
}

update();
