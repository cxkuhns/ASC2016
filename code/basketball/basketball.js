var hoop;
var ball;
var shot;
var made;
var score;
var inplay;

function setup(){
	$('#myBtn').css("visibility","hidden");
  	var img1 = loadImage("hoop.jpg");
  	var img2 = loadImage("ball.png");
	createCanvas(500,500);
	rectMode(CENTER);
	hoop = createSprite(250,125);
	hoop.addImage(img1);
	//hoop.debug = true;
	hoop.setCollider("rectangle",-3,-30,65,20)

	ball = createSprite(250,400);
	ball.addImage(img2);
	ball.scale = .1 ;
	//ball.debug = true;
	ball.setCollider("circle",0,0,300);
	shot = false;
	made = false;
	inplay = true;
	ball.visible = true;
	hoop.visible = true;
	score = 0;
	loop();
}

function myReset(){
	shot = false;
	made = false;
	inplay = true;
	ball.visible = true;
	hoop.visible = true;
	score = 0;
	loop();
}

function draw(){
	if (inplay){
		background(255);
		if (!mouseDown(LEFT)&& !shot &&!made){
			ball.position.x = mouseX;
			ball.position.y = 400;
		}
		else{
			shot = true;
		}
		if (shot){
			if (ball.bounce(hoop)){
				made = true;
				shot = false;
				ball.setSpeed(0,0);
				score+=1;
			}
			else if (ball.position.y < 0){
				shot = false;
				inplay = false;
			}
			else{
				ball.position.y -= 4;
			}
		}
		if (made){
			if (ball.position.y < 150){
				ball.scale = ball.scale*.7;
				ball.position.y += 5;
			}
			else{
				ball.scale = .1;
				shot = false;
				made = false;
			}
		}
		drawSprites();
		$('#score').text(score);
	}
	else{
		$('#myBtn').css("visibility","visible");
		gameOver();
	}
}

function gameOver(){
	ball.visible = false;
	hoop.visible = false;
	noLoop();
	background(color(255,20,40));
	textSize(50);
	fill(255);
	text("YOU LOSE",120,250);
	$('#myBtn').click(myReset);
}