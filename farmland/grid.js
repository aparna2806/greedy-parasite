function setup(){
createCanvas(windowWidth, windowHeight);
}

function preload(){
  cow = loadImage('images/cow.png');
  frog = loadImage('images/frog.png');
  monkey = loadImage('images/monkey.jpeg');
  octopus = loadImage('images/octopus.jpeg');
  owl = loadImage('images/owl.png');
}


function draw(){
background(220);


image(cow,0,0);
cow.resize(200,200);

var cols=5;
var rows=3;
var cellWidth= width / cols;
var cellHeight= height / rows;

for (let i=0;i<cols;i++){
  for (let j=0;j<rows;j++){
    var x= i*cellWidth;
    var y= j*cellHeight;
    noFill();
    rect(x,y,cellWidth,cellHeight);

  }

}
}
