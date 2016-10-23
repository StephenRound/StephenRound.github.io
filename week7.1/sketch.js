var pac = [];

function setup() {
  createCanvas(800, 400);
  for (var i = 0; i < 5; i++) {
    pac[i] = new PacMan(60, 100, 100);
  }
}

function draw() {
  var array = [];
  background(105);
  
  for (var i = 0; i < pac.length; i++) {
    array = pac.slice(0, i);
    array = array.concat(pac.slice(i + 1, pac.length));
    pac[i].posCheck(array);
    translate(50, 50);
    pac[i].drawDude();
  }
}