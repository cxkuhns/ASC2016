var x;
var y;
var speed = 5;
var bgClr;
var sqClr;
var txtClr;
var noPrint;
var inPlay;

function sum(anArray, num){
  var count = 0;
  for (var i = 0; i < anArray.length; i++){
    if (anArray[i]==num){
      count+=1;       
    }
  }
  return count;
}

function makeMaze(){
	background(bgClr);
	fill(255);
	rect(width/2,height/2,550,550);
	fill(bgClr);
	rect(150,250,20,450);
	fill(txtClr);
	textSize(20);
	text("finish",500,60);
}

function gameOver(){
	noLoop();
	background(color(40,255,125));
	textSize(50);
	fill(255);
	text("YOU WIN",170,300);
	$('#myBtn').click(setup);
}

function setup(){
	$('#myBtn').css("visibility","hidden");
	var canvas = createCanvas(600,600);
	canvas.parent('sketch-holder');
	rectMode(CENTER);
	x=35;
	y=35;
	bgClr = color(0,0,12);
	sqClr = color(234,0,0);
	txtClr = color(240,167,0);
	noStroke();
	makeMaze();
	fill(sqClr); 
	rect(x,y,20,20);
	loadPixels();
	totalBG = sum(pixels, 12);
	totalTXT = sum(pixels,167);
	inPlay = true;
	loop();
}

function draw(){

	if (inPlay){

		makeMaze();
		fill(sqClr); 
		rect(x,y,20,20);
		if (keyIsPressed){
			if (key=='w'){
				y-=speed;
			}
			else if (key=='a'){
				x-=speed;
			}
			else if (key=='d'){
				x+=speed;
			}
			else if (key=='s'){
				y+=speed;
			}
			else if (key=='p'){
				inPlay = false;
			}
		}

		loadPixels();
		var newttlBG = sum(pixels, 12);
		if (newttlBG<totalBG){ //if there's less of background, sprite is overlapping it
			x=35;
			y=35;
		}
		var newttlTXT = sum(pixels, 167);
		if (newttlTXT<totalTXT){ //if there's less of finsih txt, sprite is overlapping it
			inPlay = false;
		}
	}
	else{
		$('#myBtn').css("visibility","visible");
		gameOver();	
	}
}