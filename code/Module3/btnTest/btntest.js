function setup() {
	createCanvas(500,500);
	background(0);
}

function draw(){
	if (keyIsPressed){
		if (key=='w'){
			btn = document.createElement("button");
			btn.textContent = "change direction";
			$("body").append(btn);
		}
		else if (key=='x'){
			$("button").remove();
		}
	}
}