function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
 
  if (mouseIsPressed) {
     stroke("red");
     fill("blue");
     rect(mouseX,mouseY,20,20);
  }
  
}
