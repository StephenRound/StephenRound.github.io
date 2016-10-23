function PacMan(size, x, y) {
  this.diam = size;
  this.x = x;
  this.y = y;
  this.radius = this.diam / 2;

  this.time = 0;
  this.maxTime = 8;
  this.randomTime = random(this.maxTime);

  this.change = 0;
  this.xchan = 0;
  this.ychan = 0;
  this.maxChange = 4;
  this.wait = false;

  this.eyeX = this.diam * (1 / 5);
  this.eyeY = this.diam * (-1 / 3);
  this.eyeDiamX = this.diam / 10;
  this.eyeDiamY = this.diam / 10;
  
  this.maxWidth = width;
  this.maxHeight = height;

  this.directs = ['north', 'south', 'east', 'west']; //literally the directions
  this.direct = random(this.directs); //takes a random direction
}


PacMan.prototype.drawDude = function() {
  this.randomTimer();
  this.move();

  push();
  translate(this.x, this.y);
  if (this.direct === 'east') {
    //this is fine, he already faces this way
  } else if (this.direct === 'north') {
    rotate(PI / 2);
  } else if (this.direct === 'west') {
    scale(-1, 1); //flips the pacman; as opposed to rotate(PI), which rotates it so his eye is on his chin
  } else if (this.direct === 'south') {
    rotate(-PI / 2);
  }


  fill(255, 255, 0);
  stroke(0);


  ellipse(0, 0, this.diam, this.diam);

  fill(0);
  ellipse(this.eyeX, this.eyeY, this.eyeDiamX, this.eyeDiamY);

  line(0, 0, this.radius - (this.diam / 10), -20);
  line(0, 0, this.radius - (this.diam / 10), 20);

  pop();
  
  //this draw script is not optimized, it only really works for the diam i specified here. any other parameter makes an ugly pacman
}

PacMan.prototype.move = function() {

  if (!this.wait) { //if the pacman isn't waiting, then this lets him move
    this.x += this.xchan;
    this.y += this.ychan;
  }

  if (this.x + this.radius >= this.maxWidth) {//stops the pacman from wandering off screen, sorta
    this.x = this.maxWidth - this.radius;
    this.xchan = 0;
  } else if (this.x - this.radius <= 0) {
    this.x = 0 - this.radius;
    this.xchan = 0;
  }

  if (this.y + this.radius >= this.maxHeight) {
    this.y = this.maxHeight - this.radius;
    this.ychan = 0;
  } else if (this.y - this.radius <= 0) {
    this.y = 0 + this.radius;
    this.ychan = 0;
  }
}

PacMan.prototype.randomTimer = function() {
  var time = this.time / frameRate(); //turns each frame into a unit of time. without dividing by frameRate, the pacmans change direction spiradically.
  if (time >= this.randomTime) {
    this.changeDirect();
  } else {
    this.time++;
  }
}

PacMan.prototype.changeDirect = function() {
  var direction;
  this.time = 0; //time is called here to reset the clock in the randomTimer() function
  this.randomTime = random(this.maxTime); //gives the pacman the amount of time he can travel in a direction


  do {
    direction = random(this.directs);
  } while (direction == this.direct);
  //this creates the direction from one of the cardinals, and this.direct becomes that direction
  //my greatest triumph
  this.direct = direction;

  this.change = random(this.maxChange);
  if (direction === 'east') {
    this.xchan = this.change;
    this.ychan = 0;
  } else if (direction === 'north') {
    this.xchan = 0;
    this.ychan = this.change;
  } else if (direction === 'west') {
    this.xchan = -this.change;
    this.ychan = 0;
  } else if (direction === 'south') {
    this.xchan = 0;
    this.ychan = -this.change;
  }
}

//this whole function tells the pacmen where each other pacman is in relation to them
PacMan.prototype.posCheck = function(array) {
  var curDist = 0;
  var dis = 0;
  var xdiff = 0;
  var ydiff = 0;

  this.wait = false; //resets the waiting each time it's called in the for loop in sketch.js
  for (var i = 0; i < array.length; i++) {
    curDist = dist(this.x, this.y, array[i].x, array[i].y);
    dis = this.radius + abs(this.xchan) + abs(this.ychan) + array[i].radius;
//abs() takes the absolute value of the parameter; don't want to add negatives here
    xdiff = array[i].x - this.x;
    ydiff = array[i].y - this.y;

    if (this.direct == 1 && curDist <= dis && xdiff > 0) {
      this.wait = true;
    } else if (this.direct == 1 && curDist <= dis && ydiff > 0) {
      this.wait = true;
    } else if (this.direct == 2 && curDist <= dis && xdiff < 0) {
      this.wait = true;
    } else if (this.direct == 3 && curDist <= dis && ydiff < 0) {
      this.wait = true;
    }
  // if this.wait is true, pacman waits
  }

}