// Code from a modified Daniel Shiffman example
// https://thecodingtrain.com/

var angle = 0;
var seed;

function setup() {
  createCanvas(400, 400);
  seed = random(1000);
}
////////////////////////////////////////////////
function draw() {
  background(225);
  angleMode(DEGREES);
  randomSeed(seed);
  angle = random(50,200);
  stroke(255);
  translate(200, height);
  branch(100, 3);
}
/////////////////////////////////////////////////
function branch(len, thickness) {
  stroke(205 + (-len - 10) ,133 + (-len - 10) ,63 + (-len - 10))
  strokeWeight(thickness);
  line(0, 0, 0, -len);
  translate(0, -len);
  noiseDetail(10);
  angle = noise(angle / 300 + frameCount / 140)* 60;
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * random(0.5, 0.8), thickness*0.8);
    pop();
    push();
    rotate(-angle);
    branch(len * random(0.5, 0.8), thickness*0.8);
    pop();
  } else{
    var leafSize = random (10, 30);
    noStroke();
    fill(random(220, 255),random(0,128),random(0,128), random(50,80));
    ellipse(len * random(0.5, 0.8), thickness*0.8, leafSize , leafSize);

  }
}
