   /********************************************************
     * @author     Daan Meert
     * @created    31/05/2016
     * @copyright  Copyright © 2015-2016 Artevelde University College Ghent
     * @function   spelletje om de bal terug te kaatsen
     ********************************************************/
//todo: vul je naam in bij de commentaar en geef dit bestand de naam familienaamVoornaam.html
//todo: verander ook de naam van de map "praktijkStartbestanden" naam familienaamVoornaam (doe je deze dingen niet dan verlies je vijf punten op deze oefeningen)
//todo 1: Ik heb het bestand in een js bestand gezet door alles te kopieren en hierin te plakken. Ik heb een scripttag gemaakt met een src die naar hier verwijst.
//todo 2: Heel de code plaats je in een iffy door (function() { te gebruiken en onderaan af te sluiten me }()); dan is dit een anonieme functie
(function() {
   //todo 5: Eerst ga ik aan de gebruiker vragen hoeveel bricks hij wil ingeven op een rij. Vervolgens ga ik gaan kijken hoeveel bricks er zijn en die delen door de breedte van het canvas en delen door de padding tussen de bricks. Dan ga ik de offset gaan bepael door de totale breedte van de canvas min de totale breedte van de bricks te doen en dat delen door de padding.  
    var hoeveelBricks = parseInt(window.prompt("Hoeveel bricks wil je op een rij?"));
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ballRadius = 10;
    var x = canvas.width / 2;
    var y = canvas.height - 30;
    var dx = 2;
    var dy = -2;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width - paddleWidth) / 2;
    var rightPressed = false;
    var leftPressed = false;
    var brickRowCount = hoeveelBricks;
    var brickColumnCount = 3;
    var brickHeight = 20;
    var brickPadding = hoeveelBricks * 2;
    var brickOffsetTop = 30;
    var brickWidth = (canvas.width / hoeveelBricks) - brickPadding;
    var brickOffsetLeft = (canvas.width - (brickWidth * hoeveelBricks)) / brickPadding;
    var score = 0;
    var lives = 3;
    var bricks = [];
    for (c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (r = 0; r < brickRowCount; r++) {
            bricks[c][r] = {x: 0, y: 0, status: 1, color: giveBircksNewColor(get_random_color())};
        }
    }
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
//Todo 4: ik heb door middel de kleur aangepast dmv '#'+(Math.random()*0xFFFFFF<<0).toString(16); die gaat een random hexadecimale waarde creeeren en zo de kleur veranderen. 
    function get_random_color() {
        var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        if (color == '#eeeeee') {
            get_random_color();
        }
        else {
            return color;
        }
    }
    function giveBircksNewColor(getColor) {
        return getColor;
    }

    function get_random_RGBAcolor() {
        var color = "rgba(";
        //een waarde toekennen aan het r-, het g- en het b-kanaal
        for (var i = 0; i < 3; i++) {
            color += Math.floor(Math.random() * 255) + ", ";
        }
        //de opaciteit van de kleur wordt op 1 gezet.
        color += "1)";
        return color;
    }

    //todo 6: Door een extra keydownhandler te maken van de toets s (83) en een keyhandler van de toets f (70) en door middel van dx en dy te vergroten of verkleinen pas je de snelheid van het balletje aan.

    function keyDownHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = true;
        }
        else if (e.keyCode == 37) {
            leftPressed = true;
        }
        else if (e.keyCode == 83) {
            dx = dx--/2;
            dy = dy--/2;
        }
        else if (e.keyCode == 70) {
            dx = dx++*2;
            dy = dy++*2;
        }

    }

    function keyUpHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = false;
        }
        else if (e.keyCode == 37) {
            leftPressed = false;
        }
    }

    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth / 2;
        }
    }

    function collisionDetection() {
        for (c = 0; c < brickColumnCount; c++) {
            for (r = 0; r < brickRowCount; r++) {
                var b = bricks[c][r];
                if (b.status == 1) {
                    if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    //todo 8: Omdat ik de groote - 10 doe wat de helf is van de grote van de bricks ga ik de grote gaan halveren bij de eerst bots , bij de 2de gaan ze weg gaan
                        brickHeight = brickHeight - 10;
                        dy = -dy;
                        b.status = 0;
                        score++;
                        if (score == brickRowCount * brickColumnCount) {
                            alert("YOU WIN, CONGRATS!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }


    //Todo 4: 
    function drawBricks() {
        for (c = 0; c < brickColumnCount; c++) {
            for (r = 0; r < brickRowCount; r++) {
                if (bricks[c][r].status == 1) {
                    var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                    var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = bricks[c][r].color;
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + score, 8, 20);
    }

    function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy < ballRadius) {
            dy = -dy;
        }
        else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
                lives--;
                if (!lives) {
                    alert("GAME OVER");
                    document.location.reload();
                }
                else {
                    x = canvas.width / 2;
                    y = canvas.height - 30;
                    dx = 3;
                    dy = -3;
                    paddleX = (canvas.width - paddleWidth) / 2;
                }
            }
        }
        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        }
        else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        }
        x += dx;
        y += dy;
        requestAnimationFrame(draw);
    }
//todo 3: Ik heb een extra fuctie gemaakt die dmv document.write een div met mijn naam en de datum in de html gaat schrijven. 
    function todo3(){
    var d = new Date();
    var da = d.getDate();
    var m = d.getMonth() + 1;
    var y = d.getFullYear();
    document.write('<div>\xA9 Daan Meert ' + da + "/" + m + "/" + y + "</div>");
    }
    todo3();
    draw();
}());