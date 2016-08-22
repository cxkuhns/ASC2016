var x;
var movingrt;
var dx;

function setup(){
	createCanvas(600,600);
	rectMode(CENTER);
	x=0;
	dx=1;
	movingrt = true;
}

function changeDxn(){
	dx = -dx;
}

function draw(){
	background(200);
	fill('#A7EB42');
	rect(x,300,40,40);
	x+=dx;
	if( x>width/2 && movingrt){
		btn = document.createElement("button");
		btn.textContent = "change direction";
		$("body").append(btn);
		movingrt = false;
	}
	else if(x<-20 && !movingrt){
		dx = -dx;
		$("button").css('visibility: hidden;');
	}

	$("button").click(changeDxn);
}