var osc;
var playing = false;
var tones = [];
var word = "qwertyuiop";


function setup() {
  console.log(word);
  createCanvas(word.length*50,70);
  background(60,60,100);
  textAlign(CENTER);
  
  for (var i=0; i<word.length; i++){
    tones[i] = new p5.Oscillator();
    tones[i].setType('sine');
    tones[i].freq(240+20*i);
    tones[i].amp(0);
    tones[i].start();
    rect(20+i*40,20,30,30);
  }
  // osc = new p5.Oscillator();
  // osc.setType('sine');
  // osc.freq(240);
  // osc.amp(0);
  // osc.start();
}

function draw() {
  if (keyIsPressed){
    for (var i=0; i<tones.length; i++){
      if (word.charAt(i)==key){
        fill(0,200,125);
        tones[i].amp(0.5,0.05); 
        rect(20+i*40,20,30,30);  
      }     
    }
  }
  else{
    for (var i=0; i<tones.length; i++){
      fill(255);
      tones[i].amp(0.0,0.05); 
      rect(20+i*40,20,30,30); 
      fill(0);
      text(word.charAt(i),36+i*40,40);      
    }
  }
}
