function setup() {
  createCanvas(500, 500);
  background(140, 30, 219);
}

function draw() {
  
  //this is a bird
  noStroke();
  fill(255, 22, 140);
  //body
  rect(230, 230, 50, 100, 20);
  //head
  ellipse(240, 240, 80, 80);
  //beak
  quad(250, 250, 360, 295, 126, 255, 210, 216);
  //wing
  quad(250, 250, 300, 320, 360, 345, 420, 369);
  
  stroke(0);
  fill(255);
  //eye
  ellipse(250, 230, 20, 20);
  fill(0);
  ellipse(250, 230, 4, 4);
  
  //beak color
  fill(255, 255, 0);
  noStroke();
  triangle(126, 255, 250, 250, 210, 216);
}