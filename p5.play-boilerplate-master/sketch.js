

function setup() {
  createCanvas(800,600);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(239, 81, 118);
  translate(300, 300);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  //Second
  strokeWeight(2);
  stroke(color(255,255,255));
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  //minute
  
  stroke('Black');
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  //hour
  
  stroke('#58B95F');
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  

  push();
  rotate(secondAngle);
  stroke(0,0,0);
  line(0,0,100,0)
  pop();

  push();
  rotate(minuteAngle);
  stroke(0,0,0);
  line(0,0,80,0)
  pop();

  push();
  rotate(hourAngle);
  stroke(0,0,0);
  line(0,0,60,0)
  pop();
}