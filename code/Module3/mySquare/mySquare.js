var x;
var stop;
var dx;

function setup(){
	createCanvas(500,500);
	x=0;
	dx = 1;
	stop = true;
}

function draw(){
	rectMode(CENTER);
	background(0);
	rect(x,250,100,100);
	x+=dx;
	if (x>width/2 && stop){//square is halfway across screen
		var myBtn  = document.createElement("button");
		myBtn.textContent = "Change direction!";
		$("body").append(myBtn);
		stop = false;
	}
	$("button").click(changeDxn);
}

function changeDxn(){
	dx=-1*dx;
}