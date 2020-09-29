function preload(){
  // put preload code here
}

// Width of the shape
 // Starting position of shape
 let valcount = 100;

 let xspeed = 2.8; // Speed of the shape
 let yspeed = 2.2; // Speed of the shape

 let xdirection = 1; // Left or Right
 let ydirection = 1; // Top to Bottom

 let p1 = "The assignment searched"
 let p2 = "doesn't exist."
 let p3 = "The dog ate it."

function setup() {

  createCanvas(windowWidth, windowHeight);
  background('aqua');
  frameRate(50);
  angleMode(DEGREES)
  // Set the starting position of the shape
  xpos = 200;
  ypos = 200;

}


function draw() {


  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - 300 || xpos < 0) {
    xdirection *= -1;
  }
  if (ypos > height - 150 || ypos < 0) {
    ydirection *= -1;
  }

  // Draw the shape

/*if (frameCount > 0) {*/
  push();
    noStroke();
    fill(lerpColor(color('silver'),color('purple'),frameCount/valcount));
    rect(xpos, ypos, 300, 150);
    pop();
/*}*/

/*if (frameCount == valcount) {
  push();
    noStroke();
    fill(lerpColor(color('purple'),color('silver'),frameCount/valcount*2));
    rect(xpos, ypos, 300, 150);
    if (frameCount == valconut*2) {frameCount=0}
  pop(); */


  push();
  noStroke();
  fill(lerpColor(color('red'),color('yellow'),frameCount/valcount));
  rect(xpos, ypos, 300, 30);
  pop();



  push();
  noStroke();
  fill(lerpColor(color('blue'),color('green'),frameCount/valcount));
  rect(xpos, ypos, 270, 30);
  pop();


  push();
  noFill();
  strokeWeight(2);
  stroke(lerpColor(color('blue'),color('green'),frameCount/valcount));
  rect(xpos, ypos, 300, 150);
  pop();


  push();
  noFill();
  strokeWeight(2);
  stroke(lerpColor(color('white'),color('black'),frameCount/valcount));
  translate(235, 7);
  rect(xpos, ypos, 15, 15);
  pop();


  push();
  noStroke();
  fill(lerpColor(color('white'),color('black'),frameCount/valcount));
  translate(200, 12);
  rect(xpos, ypos, 15, 3);
  pop();


  push();
  noStroke();
  fill(lerpColor(color('white'),color('black'),frameCount/valcount));
  textSize(30);
  translate(278, 23);
  text('x', xpos, ypos);
  pop();


  push();
  noStroke();
  fill(lerpColor(color('white'),color('black'),frameCount/valcount));
  textSize(20);
  translate(20, 23);
  text('ERROR', xpos, ypos);
  pop();


  push();
  noStroke();
  fill(lerpColor(color('red'),color('yellow'),frameCount/valcount));
  translate(55, 85);
  ellipse(xpos, ypos, 50);
  pop();


  push();
  noStroke();
  fill(lerpColor(color('white'),color('black'),frameCount/valcount));
  textSize(50);
  translate(43, 98);
  text('x', xpos, ypos);
  pop();



  push();
  noStroke();
  fill(lerpColor(color('white'),color('black'),frameCount/valcount));
  textSize(15);
  translate(100, 80);
  text(p1, xpos, ypos);
  pop();

  push();
  noStroke();
  fill(lerpColor(color('white'),color('black'),frameCount/valcount));
  textSize(15);
  translate(100, 100);
  text(p2, xpos, ypos);
  pop();

  push();
  noStroke();
  fill(lerpColor(color('white'),color('black'),frameCount/valcount));
  textSize(10);
  translate(100, 120);
  text(p3, xpos, ypos);
  pop();

 if (frameCount == valcount){
    frameCount = 0;
  }




}
