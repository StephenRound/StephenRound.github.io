var swords = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0);
  for (var i = 0; i < 10; i++) {
    swords[i] = new Swords(width, height, random(40, 120));
  }

}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  fill(random(15));
  ellipse(0, 0, 100, 100);
  for (var i = 0; i < swords.length; i++) {
    swords[i].draw();
    swords[i].move();
    swords[i].spin();
  }
}

//this reshuffles a random amount of the swords on click
function mousePressed() {
  var r = random(21);
  for (var s = 0; s < r; s++) {
    swords[s] = new Swords(width, height, random(40, 120));
    swords[s].draw();
    swords[s].move;
    //swords[s].spin;
  }
  //for (var i = 0; i < swords.length; i++) {
  //}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}