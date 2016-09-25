var diameter = 50;
var x = 0;
var chaos;
var cnum;

// chaos and cnum (chaos number) are our random variables

function setup() {
  createCanvas(600, 600);
  frameRate(30);
  mousePressed(); //having this here makes the first background a random color. mousePressed is similiar to an erase function here.
}

function draw() {
  flyCircles(5, 5, 186, 99); // t and y are the rows/columns, c and p are the random color parameters
  paint(200, 55); //c and p are also random color parameters, making the rectangles a different color than the cirlces if you choose
}


//this is the "erase" function. clicking the mouse resets the background and gets rid of any prior rectangles and circles
function mousePressed() {
  chaos = random(255);
  background(chaos, chaos/2, chaos*2); //this creates a similiar effect to the stroke() function above
}


//this is the circle making function
function flyCircles(t, y, c, p) {  //t and y define how many rows and columns for the cirles, c and p are new parameters to determine the random colors
   for (var i = 1; i <= t; i++) {
      for(var e = 1; e <= y; e++) {//these loops make the cirlces fly to the left, leaving a trail of glass pipes behind
         chaos = random(c);
         cnum = random(p);
         stroke(chaos + cnum, chaos - cnum, chaos + cnum*2); //these create a random shade of purple, blue, or pink
         fill(chaos + cnum, chaos - cnum, chaos + cnum*2);
         ellipse(i*100+x, e*100, diameter, diameter);
         
      }
      
      
  }
  x++;
}

 //this is the "paintbrush" of rectangles, all dependent on mouse location
function paint(c, p) {
  chaos = random(c);
  cnum = random(p);
  noStroke();
  fill(chaos + cnum, chaos - cnum, chaos * cnum/2);
  rect(mouseX, mouseY, mouseX + 10, mouseY + 10);
}
