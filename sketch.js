

function setup(){
var canvas = createCanvas(640,640);
background(255,255,255);
var arrayCoods = []


}

function draw(){

  stroke("black");
strokeWeight(0);
}

function mouseDragged(){
line(pmouseX,pmouseY,mouseX,mouseY);
arrayCoods = (mouseX,mouseY)
console.log(arrayCoods)
}

function keyPressed(){
  background(255,255,255);
  
}