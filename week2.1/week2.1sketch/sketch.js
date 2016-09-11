function setup() {
  createCanvas(600, 400);
  background(67, 25, 109);
}


function draw() {
  noStroke();
  fill(150);
  background(67, 25, 109);
  ellipse(mouseX, 100, mouseY, 100);
  //this runs the circle that follows the mouse
 
  var a = random(256);
  var b = random(256);
  var x = random(176);
  var y = random(196);
  
  fill(a, b, x);
  rect(a, b, x, y, a, y, x, b);
  //these are the random crazy rounded rectangles


  frameRate(5);
  
  var q = random(301);
  var w = random(301);
  var e = random(301);
  var r = random(301);
  
  //this makes the random triangles 
  fill(a);
  triangle(q, e, q, w, e, r);
}